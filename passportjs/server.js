

const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send(" hello boom guys yshhhhhhhhhhhhhhhhhhuhhhlllllllllllllllllllllllllllllllllllhhggggggggggggggggggg.")
})
app.listen(5000,()=>{
    console.log(" connected  http://localhost:5000")
})