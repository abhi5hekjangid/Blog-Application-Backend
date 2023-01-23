import mongoose from "mongoose";
import moongose from "mongoose";

const Schema = moongose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:"User",//collection name, a blog can ref to only one user
        required:true,
    }
});

export default moongose.model("Blog",blogSchema)