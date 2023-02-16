const express = require("express")
const cors=require("cors")
const app=express()
app.use(cors());
const planetsRouter=require("./route/planets/planets.router")


app.use(express.json())
app.use(planetsRouter)

module.exports= app