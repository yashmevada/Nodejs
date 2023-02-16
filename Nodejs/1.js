const fs=require("fs");
const { DEFAULT_ECDH_CURVE } = require("tls");
//fs.mkdirSync(" CRUD operation in nodejs")

//fs.writeFileSync(" CRUD operation in nodejs \ bio.txt","i am yashhhhhhhhhhh")
 //fs.appendFileSync("bio.txt", "i am a student of rngpit..........................................................")
//const buff_data=fs.readFileSync("bio.txt","utf-8");
//console.log(buff_data)

//fs.renameSync(" bio1.txt","mybio.txt")

//fs.writeFile("asyncfile.txt","async file created.",()=>{
//    console.log("work finish."); })
 //fs.appendFile("asyncfile.txt","1234vjdkfkk;akdf;da;d,;f,,f;,:<DEFAULT_ECDH_CURVE,f",()=>{
   // console.log("done") })

   //fs.rename("asyncfile.txt","asyncefile.txt",()=>{
   // console.log("rename done")})

   fs.readFile("asyncefile.txt","utf-8",(error,data)=>{ console.log(data)})