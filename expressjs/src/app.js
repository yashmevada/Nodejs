
const express = require("express")
const fs=require("fs")

const app = express()

app.get(("/"),(req,res)=>{
 res.send(" hello  Express people from yash side")
})

app.get(("/about"),(req,res)=>{
    // res.send(" hello.......buddy this server have very large capacity to store the data..and send a responce.. ")
     const data=fs.readFileSync("C:/Users/Admin/Documents/node/expressjs/data.csv","utf-8")
    res.send(data)
})
app.get(("/jsondata"),(req,res)=>{
    res.json([{
        id:1,
        name:"yash",
        id:1,
        name:"yash",

        id:1,
        name:"yash",
        
        id:1,
        name:"yash",
        
        id:1,
        name:"yash",
        
        id:1,
        name:"yash",
    }])
   })

app.listen(8000,"127.0.0.1",()=>{
    console.log(" server is started")
})
