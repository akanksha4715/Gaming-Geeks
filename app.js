var http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app= express();

app.set('view engine','ejs');
app.set('views','view');
app.use(bodyParser.urlencoded({extended:false}));     //will parse all the incoming text
app.use(express.static(path.join(__dirname,'public')));

const loginroutes = require('./routes/loginpage');
const homeroutes = require('./routes/home');
const error_routes = require('./routes/404');


app.use(homeroutes);
app.use(loginroutes);
app.use(error_routes);


const server = http.createServer(app);
server.listen(3000);




