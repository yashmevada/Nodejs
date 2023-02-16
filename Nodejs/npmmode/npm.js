const chalk = require("chalk")

console.log(chalk.yellow.inverse("i am aysh"))


const validator=require("validator")
const email=validator.isEmail("yash152152@+2fggdfgdhhhcodjcox@gmail.com")
console.log(email)
console.log(email? chalk.green.inverse(true):chalk.red.inverse(false))