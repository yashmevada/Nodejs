const http=require("http")

const server =http.createServer((req,res) => {
    res.end("hello yash lal......you are out of syllbus..")
}) 
 server.listen(8000,"127.0.0.1",()=>{
    console.log("server lisning from port 8000")
 })