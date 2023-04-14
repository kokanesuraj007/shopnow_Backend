const mongoose = require("mongoose");

const cartsSchema = new mongoose.Schema({
  token: {
    type: String,
    require: true,
  },
  cartData: {
    type: Array
  },
});

const Carts = mongoose.model("carts", cartsSchema);

module.exports = Carts;
