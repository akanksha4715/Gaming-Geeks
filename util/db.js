// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;
// let db;
// const mongoconnectionstring='mongodb+srv://Akanksha_Tomar:akto300247@clustergame.7sfe7.mongodb.net/mydb?retryWrites=true&w=majority';

// const mongoconnect = callback=>{
//     mongoClient.connect(mongoconnectionstring,{useNewUrlParser: true, useUnifiedTopology: true })
//     .then(client=>{
//         console.log('connected');
//         db=client.db();       
//     })
//     .catch(err=>{
//     console.log(err);
//     });
// }
// const getdb=()=>{
    
//     if(db){
//         return db;
//     }
//     throw 'no db found';
// }
// exports.mongoconnect=mongoconnect;
// exports.getdb=getdb;
