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
                type : String,
                ref : 'customers',
                required : true
            }
        }
        ]
    }
});
user.methods.addtocart = function(game){
    const updatedcartitems = [...this.cart.items];
    
    updatedcartitems.push({
        gameid: game.gameid,
    });
    const updatedcart = {
        items : updatedcartitems
    }
    console.log(updatedcart);
    this.cart = updatedcart;
    return this.save();
    

}
module.exports = mongoose.model('user',user);