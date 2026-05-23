const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/home') res.end('Welcome to home page');
    else res.end('Good Morning Kolkata city');
});

server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})


