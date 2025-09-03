const fs=require("fs")

const loggerMiddleVare=(req,res,next)=>{
    let data=  `method:${req.method} | url:${req.url} | Date:${Date.now()} `
    fs.appendFileSync("./logs.txt",data)
    next()
}

module.exports=loggerMiddleVare