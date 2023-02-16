import {quotes,users} from './fackdb.mjs'
import {randomBytes} from 'crypto'
import mongoose from 'mongoose'
const User = mongoose.model("User")
//import bcrypt from "bcrypt"
const resolvers = {
    Query:{
       users:()=>users,
       user:(_,{_id})=>users.find(user=>user._id == _id),
       quotes:()=>quotes,
       iquote:(_,{by})=>quotes.filter(quote=>quote.by == by)
    },
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by == ur._id)
    },
    Mutation:{
        signupUser:async(_,{userNew})=>{
           
            const user=  await User.findOne({email:userNew.email})
            if(user){
                throw new Error("user already  exists with that email");
            }

            const hashedpassword=  await bcrypt.hash(userNew.password,12)

            const newUser=new User({
                ...userNew,
                password

            

            })
             return await newUser.save()
        } 
    }
}

export default resolvers