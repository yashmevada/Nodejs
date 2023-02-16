const express=require("express")
const app= express()
const path=require("path")


    const data = path.join(__dirname,"../public")
    app.use(express.static(data))
    

//    console.log(__dirname)


app.listen(8000,()=>{
    console.log(" server is running")
})