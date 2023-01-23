import User from "../model/User";
import bcrypt from 'bcryptjs'

//http requests are always asynchronous task
export const getAlluser = async(req,res,next)=>{
    let users;
    try{    
        users  = await User.find();
    }
    catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(404).json({message: "No users found"});
    }
    return res.status(200).json({users});
};

export const signup = async(req,res,next) => {
    const {name,email,password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }
    catch(err){
        return console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message: "User Already Exists! login Instead"});
    }

    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: [], // a user can have multiple blogs that is why we used an array
    });


    try{
        await user.save();
    }catch(err){
        return console.log(err);
    }

    return res.status(201).json({user});
};


export const login = async(req,res,next) => {
    const {email,password} = req.body;
    
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }
    catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res
        .status(404)
        .json({message: "Couldn't find the user by this EmailID"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password)

    if(!isPasswordCorrect){
        return res.status(400)
        .json({message: "Incorrect Password"});
    }

    return res.status(200).json({message : "Login Successful"});
};