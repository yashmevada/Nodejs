
require("dotenv").config()
const express=require("express")
const bcrypt=require("bcryptjs")
const app=express()
 const port=process.env.pid || 5001
const path =require("path")
//const cookiesprser=require("cookie-parser")
const hbs=require("hbs")
const template_path=path.join(__dirname,"../template/views")
// require('dotenv').config()

 require("../src/db/conn")
const empcollection=require("../src/model/empSchema")
//const { log } = require("console")
//app,use(cookiesprser())
app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs")
app.set("views",template_path)
// app.get("/",(req,res)=>{
//     res.send(" boom guys")
// })

app.use(express.json())
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
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


        const token= await empData.generateAuthToken()

    //password hash
    
 res.cookie("jwt",token)
    
        const postdata= await empData.save()
        res.send(postdata)
    } else{
        res.send("password is not matching")
    }  
   } catch(e){
       res.send(e);
   }
})


//login check

app.post("/login",async(req,res)=>{
    
    try {
        
        const Email=req.body.email;
        const Password=req.body.password
        console.log(`${Email}`)
        console.log(`${Password}`)
       
       const  useremail=await empcollection.findOne({email:Email})
       const isMatch= await bcrypt.compare(Password,useremail.password) 
       console.log('------',isMatch) //,//useremail
       
      const token= await useremail.generateAuthToken()
      console.log("the token is generated during login::",token);
      res.cookie("jwt",token)
      console.log(res.cookie.jwt);
       if (isMatch){
            res.status(200).render("index")
        }
        else{       
        res.send(" abe password shi se dal🤣😂")
            //res.send(e)
        }
    } catch (error) {
        console.log(error)
    }
}
)
app.listen(port,(e)=>{
    console.log(port)
})

app.get("/data", async(req,res)=>{
try{
    const getMens=   await empcollection.find()
      res.status(201).send(getMens)
       
}
 catch(e){
    res.status(400).send(e)

 }
})