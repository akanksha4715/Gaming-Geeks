var http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app= express();

app.set('view engine','ejs');
app.set('views','view');
app.use(bodyParser.urlencoded({extended:false}));     //will parse all the incoming text
app.use(express.static(path.join(__dirname,'public')));
app.get('/home',(req,res,next)=>{
    res.render('pubg',{});
});
app.get('/login',(req,res,next)=>{
    res.render('login');
    
});
app.get('*',(req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
});
const customers=[];
app.post('/login',(req,res,next)=>{
    customers.push({Id:req.body.uname,
                    Age : req.body.age});
                    console.log(customers);
                    res.redirect('/home');
});

const server = http.createServer(app);
server.listen(3000);




