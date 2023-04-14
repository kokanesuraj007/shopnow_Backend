const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    token:{
        type:String,
        require:true,
    },
    cartData:{
        type:Array,
        require:true,
    }

});

const Cart = mongoose.model("cart",cartSchema);

module.exports = Cart;