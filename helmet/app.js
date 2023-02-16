
const express=require("express")
const helmet=require("helmet")
const app=express()
const port=2000

app.use(helmet())
app.get("/",(req,res)=>{
    res.send("connection good")
})

app.listen(port,(e)=>{
    console.log(e)
})