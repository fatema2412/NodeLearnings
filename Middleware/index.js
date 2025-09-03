const express=require("express")
const userRouter = require("./Router/user.router")
const loggerMiddleVare = require("./Router/middleware/logger.middleware")
const limiter = require("./Router/middleware/ratemiddleware")
const morganMiddleware = require("./Router/middleware/morgan.middleware")
const app=express()

// app.use(limiter)
// app.use(loggerMiddleVare)
app.use(morganMiddleware)
app.use("/user",userRouter)

app.listen(8080,()=>{console.log("server started")})