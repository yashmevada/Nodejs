const fs=require('os')

console.log(fs.arch())

const freememory=fs.freemem()
console.log(`${freememory/1024/1024/1024}`)
console.log(fs.hostname())

console.log(fs.loadavg())
console.log(fs.homedir())
console.log(fs.networkInterfaces())
console.log(fs.platform())
console.log(fs.release())
console.log(fs.type())
console.log(fs.totalmem())


console.log(fs.tmpdir())













