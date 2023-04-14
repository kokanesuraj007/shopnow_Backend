"use strict";

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
var User = mongoose.model("user", userSchema);
module.exports = User;
//# sourceMappingURL=user.model.dev.js.map
