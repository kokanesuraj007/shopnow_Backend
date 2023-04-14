"use strict";

var mongoose = require("mongoose");

var menSchema = new mongoose.Schema({
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
var Men = mongoose.model("men", menSchema);
module.exports = Men;
//# sourceMappingURL=mens.model.dev.js.map
