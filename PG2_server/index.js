const http = require("http");

const myServer = http.createServer((req,res)=>{
    console.log("New Req Rec..");
    res.end("Hello From Server");
});
//we needed a port number with callback function for run the server

myServer.listen(8000,()=>console.log("server started"));











