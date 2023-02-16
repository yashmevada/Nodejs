 const express=require("express")

 const os =require("os");

  const cluster =require("cluster")

 const cpuNum=os.cpus().length

 const PORT =process.env.PORT || 5500
 console.log(cpuNum)

if (cluster.isprimary){
    for(i=0;i<cpuNum;i++) {
        cluster.fork()
   }
    cluster.on(`exit`,()=>{
        cluster.fork()
    })
}


else{
 const app =express();
 app.get("/",async(req,res)=>{
    let result=0;
    for(let i=0;i<10;i++)
    {
        result=result+i;
    }
  return res.json({processid:process.pid,result})
 })

 app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} and ${process.pid}`)
 })

}