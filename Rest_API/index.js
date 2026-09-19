const express = require("express");
const users = require('./MOCK_DATA (1).json');

const app = express();
const port = 8000;

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





app.listen(port,()=> console.log(`Server Started at port ${port}`));
