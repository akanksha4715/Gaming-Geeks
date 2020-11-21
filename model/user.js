const mongoose = require('mongoose');
const { model } = require('./candidates');
const schema=mongoose.Schema;
const user = new schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    cart : {
        items : [
            {
            gameid : {
                type : schema.Types.ObjectId,
                ref : 'customers',
                required : true
            }
        }
        ]
    }
});
module.exports = mongoose.model('user',user);