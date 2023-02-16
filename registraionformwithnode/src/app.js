
const express=require("express")
const app=express()
 const port=process.env.pid || 5001
const path =require("path")
const hbs=require("hbs")
const template_path=path.join(__dirname,"../template/views")

 require("../src/db/conn")
const empcollection=require("../src/model/empSchema")

app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs")
app.set("views",template_path)
// app.get("/",(req,res)=>{
//     res.send(" boom guys")
// })

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/empdata",async(req,res)=>{
    
   try{
  
     const password=req.body.password
    const cpassword=req.body.cpassword;
    if(password === cpassword){
        const empData = new empcollection({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            cpassword:req.body.cpassword,
        })
        const postdata= await empData.save()
        res.send(postdata)
    } else{
        res.send("password is not matching")
    }  
   } catch(e){
       res.send(e);
   }
})
app.listen(port,(e)=>{
    console.log(e)
})