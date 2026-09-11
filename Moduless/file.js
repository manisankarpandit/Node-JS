const fs = require("fs");

// //create a syncronous file , no error throwing it is blocking 
// fs.writeFileSync("./test.txt","Hey there");

//Async file only throw the error , it is non blocking 
// fs.writeFile("./test.txt","Hey there Async",(err)=>{});

//readfile : create a file like contects.txt manulaay
// const result = fs.readFileSync("./contects.txt","utf-8");
// console.log(result);

//using Async function which is not return
// fs.readFile("./contects.txt","utf-8",(err,result)=>{
//     if(err) console.log("Error",err);
//     else console.log(result);
// })

//append anything in the file
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

//copy the file
// fs.cpSync("./test.txt","./copy.txt");

//Delete any file 
// fs.unlinkSync("./copy.txt");

//you can see the any file stastics
// console.log(fs.statSync("./test.txt"));


//create directiory or folder
fs.mkdirSync("my_docs");










