import path from 'path'; //core module
import express from 'express';
import mongoose from 'mongoose';
const __dirname = path.resolve('.'); //done while using ES module as __dirname, __filename are not available in it
const hostrouter=express.Router();

hostrouter.get('/add-home',(req,res,next)=>{
    // res.send(`<h1>Add a home</h1>
    //     <form action='/host/add-home' method='POST'>
    //         <input type='text' placeholder='enter the home name' name='housename'/>
    //         <input type='submit'/>
    //     </form>`);
    res.sendFile(path.join(__dirname,'../','Proj_Deploy','views','addHome.html')); //file is send
});
hostrouter.post('/host/add-home',(req,res,next)=>{
    // res.send(`<h1>Home registered successfully</h1>
    //     <a href="/">Go back to homepage</a>`);
    res.sendFile(path.join(__dirname,'../','Proj_Deploy','views','homeaddedsuccess.html')); //file is send
    console.log(req.body);
})

export default hostrouter;