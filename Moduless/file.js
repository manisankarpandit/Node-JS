const fs = require("fs");

// //create a syncronous file , no error throwing
// fs.writeFileSync("./test.txt","Hey there");

//Async file only throw the error
// fs.writeFile("./test.txt","Hey there Async",(err)=>{});

//readfile : create a file like contects.txt manulaay
// const result = fs.readFileSync("./contects.txt","utf-8");
// console.log(result);

//using Async function which is not return
fs.readFile("./contects.txt","utf-8",(err,result)=>{
    if(err) console.log("Error",err);
    else console.log(result);
})



