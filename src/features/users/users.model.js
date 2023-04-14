const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
