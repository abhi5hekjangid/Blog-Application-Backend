import express, { response } from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
//express js gives all the functionality to app variable
const app = express();

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

//connect to database
mongoose.connect(
    'mongodb+srv://admin:five4321@cluster0.m3jg5fe.mongodb.net/Blog?retryWrites=true&w=majority'
    )
    .then(()=>app.listen(5000))
    .then(()=>console.log("Connected to database and Listening to localhost port 5000")
    )
    .catch((err)=>console.log(err));
