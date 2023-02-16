const EventEmiter = require("events")

const Event = new EventEmiter()

Event.on("sayyourname",()=>{
    console.log("my name is yash")
})

Event.on("sayyourname",()=>{
    console.log("my name is yash lal ")
})

Event.on("sayyourname",()=>{
    console.log("my name is .....")
})
Event.on("sayyourname",()=>{
    console.log("my name is yashhhhhhhhhhhhhh")
})
Event.emit("sayyourname")