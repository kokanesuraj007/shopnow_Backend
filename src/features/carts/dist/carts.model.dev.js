"use strict";

var mongoose = require("mongoose");

var cartsSchema = new mongoose.Schema({
  token: {
    type: String,
    require: true
  },
  cartData: {
    type: Array
  }
});
var Carts = mongoose.model("carts", cartsSchema);
module.exports = Carts;
//# sourceMappingURL=carts.model.dev.js.map
