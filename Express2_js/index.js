const http = require("http");
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    return res.send("Hello from homepage");
});
app.get("/about",(req,res)=>{
    return res.send("Hello From About Page");
});


app.listen(8000,()=>console.log("server started"));

//after start server you paste this link http://localhost:8000/search?search_query=java+mani
//then it will generare the output Here are your result for java mani











