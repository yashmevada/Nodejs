
const express=require("express")
const fs=require("fs")
const http=require("https")
const path=require("path")
const app=express()


app.use("/",(req,res,next)=>{
    res.send(" hello yash....")

})

const sslServer=http.createServer({
    key:fs.readFileSync(path.join(__dirname,"cert","OpenSSL","OpenSSL-fips","1.0.2u","bin","key.pem")),
    cert:fs.readFileSync(path.join(__dirname,"cert","OpenSSL","OpenSSL-fips","1.0.2u","bin","cit.pem"))
},app)

sslServer.listen(4000,()=>{
    console.log(" secure server ⚙⚙🎃⚙")
})