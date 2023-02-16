const fs=require("fs")

const http=require("http")
 const server=http.createServer((req,res)=>{
   const data=fs.readFileSync("C:/Users/Admin/Documents/node js/PLANET-PROJECT/kepler_data.json","utf-8")
   res.end(data)

    const objectdata=JSON.parse(data)
    console.log(objectdata[2].kepid)
 })

 server.listen(9000,"127.0.0.1",()=>{
   console.log(" server start.")
 })