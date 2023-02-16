const http=require("http")

const server=http.createServer((req,res) => {
    if(req.url="/")
    {
    res.end(" hello from the home side");}
   else if(req.url="/Aboutus")
   {
        res.end("hello from About us side.");
    }
    else if(req.url="/contact"){
        res.end(" hello from contact side..");    
    }
    else{
        res.writeHead(404)
        res.end(" 404 error .");
    }
})
server.listen(8000,"127.0.0.1",()=>
{
    console.log(" lisning from port 8000 ");
})