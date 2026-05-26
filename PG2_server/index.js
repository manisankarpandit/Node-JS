const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    console.log("New Req Rec..");

    //comming request k liya a log creation using fs module import in upper

    const log = `${Date.now()}: New Req Received..\n`;
    fs.appendFile('log.txt',log, (err,data)=>{
        //use always non blogging request
        switch(req.url){
            case '/':res.end("hOMEPAGE");
            break;
            case '/about' : res.end("I am Mani");
            break;
            default : res.end("404 Not Found");
        }
        // res.end("Hello From Server again");
    });
});
//we needed a port number with callback function for run the server

myServer.listen(8000,()=>console.log("server started"));











