
const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

//require("dotenv").config();
const jwt =require("jsonwebtoken")
const empSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[{
       token:{
        type:String,
        required:true
       }
    }]

})
// generating tokens
empSchema.methods.generateAuthToken = async function(){
    try {

        //const user=this;
        //console.log( 'user----',this._id);
        //console.log("this",this.id.toString())
        const token =jwt.sign({_id:this.id.toString()},`${process.env.SECRET_KEY}`)
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        console.log(`token is ::::${token}`);
        return token

    } catch (error) {
        //res.send(error)
        console.log(error);
    }

}


//converting password into hash
empSchema.pre("save",async function(next){
  // if password is updated then it will effect othervies not..
    if(this.isModified("password")){
    //const passwordhash=await bcrypt.hash(password,10)
    console.log(`the current password is ${this.password}`);
    console.log(`the current password is ${this.cpassword}`);

    this.password= await bcrypt.hash(this.password,10)
    this.cpassword= await bcrypt.hash(this.cpassword,10)
    console.log(`the current password  is ${this.password}`);
    //console.log(`the current password  is ${this.cpassword}`);
    //this.cpassword=undefined;    
}   
    next()
})

const empcollection =new mongoose.model("empcollection",empSchema)

module.exports=empcollection