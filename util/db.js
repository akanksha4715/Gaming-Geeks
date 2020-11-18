const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const mongoconnectionstring='mongodb+srv://Akanksha_Tomar:akto300247@clustergame.7sfe7.mongodb.net/trialdb?retryWrites=true&w=majority';
const mongoconnect = callback=>{
    mongoClient.connect(mongoconnectionstring,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(client=>{
        console.log('connected');
        callback(client);
    })
    .catch(err=>{
    console.log(err);
    });
}
module.exports=mongoconnect;
