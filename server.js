const express = require('express')
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/consumer/')

app.listen(3000,()=>{
    console.log("listening in 3000");
});