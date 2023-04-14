"use strict";

var mongoose = require("mongoose");

var usersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
});
var Users = mongoose.model("users", usersSchema);
module.exports = Users;
//# sourceMappingURL=users.model.dev.js.map
