const express =  require("express");
const fs = require("fs");
//import mock data
const users = require("./MOCK_DATA.json"); //users mock data k upor hover kor raha hai

const app = express();
const PORT = 8000;

//Middleware ->plugin
//This is a built-in Express middleware used to read data sent from HTML forms
//  (application/x-www-form-urlencoded) and store it in req.body.
app.use(express.urlencoded({extended:false}));
//Middleware 2
app.use((req,res,next)=>{
    console.log("Hello From Middleware 1");
    req.userName = "Mani";
    // return res.json({mgs : "Hello From middleware 1"});
    next();//for forwording the message into the next request 
}) 
app.use((req,res,next)=>{
    console.log("Hello From Middleware 2",req.userName);
    fs.appendFile("log.txt", `\n ${Date.now()} : ${req.method} : ${req.path}`,(err,data)=>{
        next();
    })
}) 


//Routs
// app.get("/users",(req,res)=>{
//     const html = `
//     <ul>
//         ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// })

//REST API  
// GET/user - List all user 
app.get('/api/users',(req,res)=>{
    res.setHeader("x-myName","Mani Sankar Pandit");//http header and this is custom header
    // allways add x to custom header
    // console.log(req.headers);
    return res.json(users);
})

//if route are same then we can merge them 
//  GET/api/user/1 - GET the user with id 1
//  GET/api/user/2 - GET the user with id 2

app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id); //id ko get korna hai first and convert into number
    const user = users.find((user)=>user.id === id);
    return res.json(user); 
})
.patch((req,res)=>{
    //edit user with id
    return res.json ({status:"pending"})
})
.delete((req,res)=>{
    return res.json ({status:"pending"})
})



app.post('/api/users',(req,res)=>{
    //TODO : create new user
    const body = req.body; //Stores the submitted data in body.
    users.push({...body,id:users.length+1});
    //JSON.stringify(users) converts the JavaScript array into JSON text.
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return  res.json({status:"success",id:users.length});
    });
});





app.listen(PORT,()=>console.log(`server started at port no ${PORT}`));
