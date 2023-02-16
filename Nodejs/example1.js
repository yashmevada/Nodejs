// call the in-build modules.
const fs= require('fs')

//creat a new file using code in node


//fs.writeFileSync("read.text","hello i am yash from valod")

//fs.writeFileSync("read.text","hello i am yash from valod and  i am also a student")
// APPEND THE STRING in file.
//fs.appendFileSync("read.text","we are best kabaddi player in gujarat")

const buff_data=fs.readFileSync("read.text");
console.log(buff_data);
const ya=buff_data.toString()
console.log(ya);