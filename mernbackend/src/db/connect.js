
const mongoose=require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/youtubemployee")
.then(()=>{
    console.log(" succesfull connection..")
})
.catch((e)=>{
    console.log(e)
})