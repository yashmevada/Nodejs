

const express=require("express")
const app=express()

const http=require("http").createServer(app);


const io=require("socket.io")(server,{
  cors: {
    origin: "*"}

  })

io.on("connection",(socket)=>{
    console.log("what is socket:",socket)
     console.log("socket is ready to connect")

     socket.on("chat",(payload)=>{
         console.log("what is payload",payload)
         io.emit("chat",payload)
     })
})
server.listen(5000,()=>{
     console.log(" connection boom guys ")
})