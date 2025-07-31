const express=require("express");
const app=express()
const fs=require("fs")
app.use(express.json());


app.post("/user",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
 let id=Date.now()
data.user.push({id,...req.body})
fs.writeFileSync("./db.json",JSON.stringify(data))

res.send("user list")
})
app.get("/user/get",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(data.user)
})
app.patch("/user/update",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let updateddata=data.user.map((ele,id)=>{
            //  console.log(ele.id)
        if(ele.id %	2 ==0 ){
       return {...ele,work:true}
        }
        else {
            return {...ele}
        } })
    data.user=updateddata
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("todo updated")    

})
app.delete("/delete/user/:id",((req,res)=>{
    let Deletedid=req.params.id
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    console.log(Deletedid)
     let updateddata=data.user.filter((ele,id)=> ele.id !=Deletedid)
    data.user=updateddata
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("todo deleted")
}))


app.listen(8800,()=>{console.log("server started")})