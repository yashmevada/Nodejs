const express=require("express")
const path=require("path")

const hbs=require("hbs")

const app=express()
require("./db/connect")
const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))
const port=process.env.pid || 8000

// app.set('views', path.join(__dirname, 'views'));
const templates_path=path.join(__dirname,"../templates/views")
const partial_path=path.join(__dirname,"../templates/partials")



app.set("view engine","hbs")
app.set("views",templates_path)
hbs.registerPartials(partial_path)
app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port,()=>{
    console.log(`server is running at ${port} number`)
})