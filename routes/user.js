import path from 'path'; //core module

import express from 'express'; //external module
const __dirname = path.resolve('.'); //done while using ES module as __dirname, __filename are not available in it
const userrouter=express.Router();

userrouter.get("/",(req,res,next)=>{
    // res.send(`<h1>Welcome to airbnb</h1>
    //     <a href="/user">go to user</a>
    //     <a href="/host">go to host</a>
    //     <br>
    //     <a href="/host/add-home">Add home</a>`);
    res.sendFile(path.join(__dirname,'../','Proj_Deploy','views','homepage.html')); //file is send
});

export default userrouter;