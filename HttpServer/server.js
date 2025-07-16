const { readFileSync } = require("fs");
const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
    res.statusCode=200;
    res.end("welcome to Home Page ")
    }
  else if (req.url=="/aboutus"){
        res.statusCode=200;
        res.end(`<h3>welcome to About Page</h3>`)
  }
  else if(req.url=="/contactus"){
         res.statusCode=200;
         res.end(`<a href="www.masaichool.com">Masai School</a>`)
  }
  else if(req.url=="/index"){
    const data=readFileSync("./index.js","utf-8")
    res.statusCode=200
    res.end(data)
  }
  else{
    res.statusCode=400;
    res.end("404 Not Found")
  }
})
server.listen(8801,()=>{
    console.log("server started")
})