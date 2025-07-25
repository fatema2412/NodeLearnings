const http=require("http")
const fs=require("fs")
const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))


const server=http.createServer((req,res)=>{
    if(req.url=="/create" && req.method=="POST"){
        let body=""
    req.on("data",(data)=>{
        body+=data
    })
    req.on("end",()=>{
        body=JSON.parse(body)
      let id = data.user[data.user.length-1].id+1
      console.log(id)
            data.user.push({...body,id})
     fs.writeFileSync("./db.json",JSON.stringify(data))
     res.end("user added")

    })
    }
   else if(req.url.includes("/update") && req.method=="PATCH"){
    let updateId=req.url.split("/")[2]
            let body=""
       req.on("data",(chunck)=>{
        body+=chunck
    })
    req.on("end",()=>{
    body=JSON.parse(body)
    let updatedData=data.user.map((ele,id)=>{
        if(updateId==ele.id){
            return {...ele,...body}
        }
        else 
            return {...ele}
    })
    data.user=updatedData
    fs.writeFileSync("./db.json",JSON.stringify(data))

    res.end("completed")

    })
   }
   else if(req.url=="/read" && req.method=="GET"){
    res.setHeader("content-type","application/JSON")
  let updatedData=  data.user.map(( {name,email,phone})=>({
    name,email,phone
    }))
    console.log( "ans",updatedData)
    res.end(JSON.stringify({user:updatedData}))
   }

   else if(req.url.includes("/delete") && req.method=="DELETE"){
   let deleteId=req.url.split("/")[2]
//    console.log(deleteId)
   let updatedData=data.user.filter((ele,id)=>ele.id !=deleteId)
//    console.log(updatedData)
   fs.writeFileSync("./db.json",JSON.stringify(updatedData))
     res.end("user deleted")

   }
})

server.listen(8100,()=>{
    console.log("server stated")
})
