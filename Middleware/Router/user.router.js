const express=require("express")

const userRouter=express.Router()

userRouter.get("/get",(req,res)=>{
    res.send("hello this is user get request")
})

module.exports=userRouter