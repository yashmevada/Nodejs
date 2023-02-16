
const http=require("http")
const fs=require("fs")

const server=http.createServer()

 
server.on("request",(req,res)=>{
  //  var fs=require("fs")
    //fs.readFile("data.txt",(err,data)=>{
      //  res.end(data.toString())
    //})

    // const rstream =fs.createReadStream("data.txt");

//rstream.on("data",(chunkdata)=>
//{
//  //   res.write(chunkdata)
// });
// rstream.on("end",()=>{
//     res.end();
// })
// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end(" file not found.")
// })

const rstream =fs.createReadStream("data.txt");
rstream.pipe(res)
})

server.listen(8000,"127.0.0.1",()=>{
    console.log(" server start")
})
