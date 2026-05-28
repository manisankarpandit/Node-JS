const http = require("http");
const fs = require("fs");
// const url = require("url");


function myhandler(req,res){
    // console.log("New Req Rec..");
    if(req.url==="/favicon.ico") return res.end(); 
    //comming request k liya a log creation using fs module import in upper

    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received..\n`;

    //import url api in mordern node js
   const myUrl = new URL(req.url, `http://${req.headers.host}`);

    fs.appendFile("log.txt",log, (err)=>{
        if(err){
            res.end("File Error");
            return;
        }
        //use always non blogging request
        switch(myUrl.pathname){
            case "/":
                if(req.method==='GET') res.end("HOMEPAGE");
                break;

            case "/about" :
                // const username = myUrl.query.myname;
                 //mordern js
                const username = myUrl.searchParams.get("myname");
                res.end(`Hi, ${username}`);
                break;

            case "/search":
                // const search = myUrl.query.search_query;
                //mordern js
                 const search = myUrl.searchParams.get("search_query");
                res.end("Here are your result for "+ search);
                break;
            
            case "/signup":
                if(req.method === "GET") res.end("THis is signup form");
                else if(req.method === "POST")
                    //db querry
                    res.end("Success");  
                break;

            default : 
                res.end("404 Not Found");
        }
        // res.end("Hello From Server again");
    });
};
//we needed a port number with callback function for run the server

const myServer = http.createServer(myhandler);
myServer.listen(8000,()=>console.log("server started"));

//after start server you paste this link http://localhost:8000/search?search_query=java+mani
//then it will generare the output Here are your result for java mani











