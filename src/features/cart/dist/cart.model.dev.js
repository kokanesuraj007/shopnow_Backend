"use strict";

var mongoose = require("mongoose");

var cartSchema = new mongoose.Schema({
  token: {
    type: String,
    require: true
  },
  cartData: {
    type: Array,
    require: true
  }
});
var Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
//# sourceMappingURL=cart.model.dev.js.map
