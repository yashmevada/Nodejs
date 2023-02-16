const express=require("express")
const app=express()
const passport=require("passport")
const googleStrategy =require("passport-google-oauth20")

passport.use(new googleStrategy({
     
    
clientID:"191629463846-dqm8lernng9jcjrvhvf37f57n4lhpu34.apps.googleusercontent.com",
clientSecret:"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",
callbackURL:"/auth/google/callback"
},(accessToken,refreshToken,profile,done) => {
    console.log(accessToken),
     console.log(refreshToken),
      console.log(profile)
}))

app.get("/",passport.authenticate("google",{
    scope:["profil","email"]
}))

app.get("/callback",passport.authenticate("google"))

const port=process.env.pid || 5000;

app.listen(port,()=>{
    console.log("connection boom guys")
})










