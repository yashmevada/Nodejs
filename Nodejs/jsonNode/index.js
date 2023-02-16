


const mybio={
    name: "yash",
    age: 25,
    clgname: "rngpit" ,
    pincode:124869
}
console.log(mybio.clgname)

const jsondata=JSON.stringify(mybio)

const objectdata=JSON.parse(jsondata)
console.log(jsondata)
console.log(objectdata)

const fs=require("fs")
fs.writeFile("json1.json",jsondata,()=>{
    console.log(" data send succefully.")
})

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data)
})