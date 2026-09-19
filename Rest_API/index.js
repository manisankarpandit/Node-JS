const express = require("express");
const fs = require('fs');
const users = require('./MOCK_DATA (1).json');

const app = express();
const port = 8000;

//middleware - plugin
app.use(express.urlencoded({extended:false}));

//Routes

app.get("/users",(req,res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

//Rest Api
app.get("/api/users",(req,res)=>{
     return res.json(users);
})

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);  // dynamicly  withdraw the id
    const user = users.find((user)=>user.id===id);
    return res.json(user);
});

app.post("/api/users",(req,res)=>{
    //create new user
    const body = req.body;
    const id = users.length+1;
    users.push({...body, id:id});
    fs.writeFile('./MOCK_DATA (1).json',JSON.stringify(users), (err,data)=>{
        return res.json({status:"SUCCESS",id:users.length+1});
    })
})

app.patch("/api/users/:id",(req,res)=>{
    //Edit user with id
    const id = Number(req.params.id);  // dynamicly  withdraw the id
    const body = req.body;
    const user = users.find((user)=>user.id===id);
    Object.assign(user, body);//used to update the existing user with the new values sent in the PATCH request.
    fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(users), (err, data) => {

        return res.json({
            status: "SUCCESS"
        });
    });
});

app.delete("/api/users/:id",(req,res)=>{
    //create new user
    const id = Number(req.params.id);

    const index = users.findIndex((user) => user.id === id);

    users.splice(index, 1002);

    fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(users), (err) => {

        return res.json({
            status: "SUCCESS"
        });

    });
});






app.listen(port,()=> console.log(`Server Started at port ${port}`));
