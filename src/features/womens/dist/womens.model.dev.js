"use strict";

var mongoose = require("mongoose");

var womenSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true
  },
  name: {
    type: String
  },
  quantity: {
    type: String
  },
  defaultImage: {
    type: String
  },
  hoverImage: {
    type: String
  },
  price: {
    type: String
  },
  strikePrice: {
    type: String
  },
  firstImages: {
    type: Array
  },
  secondImages: {
    type: Array
  },
  thirdImages: {
    type: Array
  }
});
var Women = mongoose.model("women", womenSchema);
module.exports = Women;
//# sourceMappingURL=womens.model.dev.js.map
