
const express =require("express");
const { get } = require("mongoose");

require("./db/connection")

const Student=require("./modules/student");
const router = require("./router/student");
const app=express();
const port = 8000
app.use(express.json())
app.use(router)

app.listen(port ,()=>
{
     console.log(`from port number${port}`)
}
)



