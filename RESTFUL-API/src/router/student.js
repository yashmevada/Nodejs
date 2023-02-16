
const express=require("express")
const Student=require("../modules/student")
const router = new express.Router()


router.get("/",(req,res)=> {
    res.send("hello from yash side")
})

router.post("/student" ,(req,res)=>{
    console.log(req.body)

    const user = new Student(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err) =>{
       res.status(400).send(err)
    })
  

}
)

router.get("/student", async (req,res)=>{
     try{
          const studentData =  await Student.find()
          res.send(studentData)
     }
     catch(e){
        res.send(e)
     }

    }
)

// get indivitual name 

router.get("/student/:id",async(req,res)=> {
    try
    {
       const id =req.params.id;
       const studentDatas = await Student.findById(id);
    console.log(studentDatas)

      if(!studentDatas){
        return res.status(404).send()
      } else{
       res.send(studentDatas) }
    } 
    catch(e){
        console.log(e)

    }
})


// delete data using id 
    router.delete("/student/:id",async(req,res)=> {
    try
    {
       const _id =req.params.id;
       const studentDatass = await Student.findByIdAndDelete(_id);
    console.log(studentDatass)

      if(!studentDatass){
        return res.status(404).send()
      } else{
       res.send(studentDatass) }
    } 
    catch(e){
        console.log(e)

    }
})

//update student data

router.patch("/student/:id", async (req,res)=>{
 
     try {
        const _id=req.params.id
        const studentDatasss = await Student.findByIdAndUpdate(_id,req.body,{new:true})
        
        console.log(studentDatasss)
        res.send(studentDatasss)
     } 
     catch(e){

       res.status(404).send();
     }
})


module.exports=router;