const express=require('express')
const User=require('../models/Usermodel')
const app=express.Router()

app.use(express.json());
app.post("/login",async(req,res)=>{
    try{
        console.log("entered")
        const result= await User.findOne({name:req.body.name,roll:req.body.roll})
        console.log(result)
        
        if(result){
            console.log("got result")
            res.send(result)
        }
        else{
            res.status(400).json("Login Failed")

        }
    }
    catch(error){
        res.status(400).json(error)
    }
});
module.exports=app
