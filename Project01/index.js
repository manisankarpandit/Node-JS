const express =  require("express");
//import mock data
const users = require("./MOCK_DATA.json"); //users mock data k upor hover kor raha hai

const app = express();
const PORT = 8000;

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
app.get('/api/users',(req,res)=>{
    return res.json(users);
})





















app.listen(PORT,()=>console.log(`server started at port no ${PORT}`));










