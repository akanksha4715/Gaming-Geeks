var http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app= express();

app.set('view engine','ejs');
app.set('views','view');
app.use(bodyParser.urlencoded({extended:false}));     //will parse all the incoming text
app.use(express.static(path.join(__dirname,'public')));

const database= require('./util/db').mongoconnect;
const loginroutes = require('./routes/loginpage');
const homeroutes = require('./routes/home');
const error_routes = require('./routes/404');
const joinroutes = require('./routes/joined');

app.use(homeroutes);
app.use(loginroutes);
app.use(error_routes);
//app.use(joinroutes);


const server = http.createServer(app);
database(
    server.listen(3000)
    );




