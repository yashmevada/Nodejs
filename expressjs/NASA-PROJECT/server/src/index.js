const http =require("http");

const app = require("./app.js")

const   { loadPlanetsData } =require("./module/planet.module.js")

const port=process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer(){

 await loadPlanetsData()
  
server.listen(port,()=>{
    console.log(`${port}`)
})
}

startServer()