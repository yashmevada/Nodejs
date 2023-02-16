const mongoose =require("mongoose")
const { stringify } = require("querystring")

const validator =require("validator")


const studentschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email: {
        type:String,
        required:true,
        unique:[true,"already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(" invalid emails");
            }
        }
    },
    phone:{
        type:Number,
        unique:true,
        min:10,
    
        required:true
    },
    address:{
        type:String,
        required:true
    }
}
) 

// we create a new collection

const Student =new mongoose.model("Student",studentschema);

module.exports= Student;