import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import rootDir from './utils/pathUtil.js';
// import hostHandler from './routes/host';
import userrouter from './routes/user.js';
import hostrouter from './routes/host.js';
const __dirname = path.resolve('.');
const app=express();
app.use(express.static(path.join(rootDir,'public')))
app.use((req,res,next)=>{
    console.log(__dirname);
    console.log(req.url,req.method);
    next();
});//this middleware applies to every middleware and will show url and method
app.use(express.urlencoded({extended:true}));
app.use(userrouter);
app.use("/host",hostrouter);//another way of giving path this /host will concatinate with path inside hostrouter
app.use((req,res,next)=>{
    // res.status(404).send('<h1>404, request not found</h1>')
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})
const port = 3001;
app.listen(port, () => { console.log("Server running at http://localhost:3001/"); }); 