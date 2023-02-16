const http =require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
     const data=fs.readFileSync("C:/Users/Admin/Documents/node js/jsonNode/jsonApi/data.json","utf-8")
            //console.log(data)
            //res.end(data) 
    const objectdata =JSON.parse(data)
       console.log(objectdata[0].title)
       
       res.end(objectdata[0].title)
    })
        
    


server.listen(8000,"127.0.0.1",() =>{
    console.log(" server start at port number 8000")
})