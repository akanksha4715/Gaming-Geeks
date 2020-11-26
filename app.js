const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const app= express();
const mongoose=require('mongoose');
const mongoconnectionstring='mongodb+srv://Akanksha_Tomar:akto300247@clustergame.7sfe7.mongodb.net/mydb';//?retryWrites=true&w=majority';

const store = new MongoDBStore({
    uri: mongoconnectionstring,
    collection: 'sessions'
  });

app.set('view engine','ejs');
app.set('views','view');
app.use(bodyParser.urlencoded({extended:false}));     //will parse all the incoming text
app.use(express.static(path.join(__dirname,'public')));
app.use(
    session({
        secret:'my secret',
        resave:false,
        saveUninitialized:false,
        store: store,
    })
    );

const loginroutes = require('./routes/loginpage');
const homeroutes = require('./routes/home');
const error_routes = require('./routes/404');
const joinroutes = require('./routes/joined');
const User = require('./model/user');

app.use((req, res, next) => {
    User.findById('5fbd48074af63036041a9fe5')
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });
app.use(homeroutes);
app.use(loginroutes);
app.use(joinroutes);
app.use(error_routes);



//const server = http.createServer(app);
mongoose.connect(mongoconnectionstring).then(result=>{
    User.findOne().then(user=>{
        if(!user){
            const user = new User({
                name : 'Akanksha Tomar',
                email : 'akanksha4715@gmail.com',
                password : 'akto300247',
                cart : {
                    items:[],
                }
            });
            user.save();
        }       
    });
    app.listen(3000);
}).catch(err=>{
    console.log(err);
})



