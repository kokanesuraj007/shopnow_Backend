"use strict";

var express = require("express");

require("dotenv").config();

var connect = require("./config/db");

var cors = require("cors");

var PORT = process.env.PORT;
var nodev = process.env.NODE_VERSION = '14.17.5';
var app = express();
app.use(express.json());
app.use(cors());

var UserRoute = require("./features/user/user.router");

var MenRoute = require("./features/mens/mens.router");

var WomenRoute = require("./features/womens/womens.router");

var ElectronicRoute = require("./features/electronics/electronics.router");

var CartRoute = require("./features/cart/cart.router");

var UsersRoute = require("./features/users/users.router");

var cartsRoute = require("./features/carts/carts.router");

app.use("/user", UserRoute);
app.use("/mens", MenRoute);
app.use("/womens", WomenRoute);
app.use("/electronics", ElectronicRoute);
app.use("/cart", CartRoute);
app.use("/users", UsersRoute);
app.use("/carts", cartsRoute);
app.listen(PORT, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(connect());

        case 2:
          console.log("listen at http://localhost:".concat(PORT));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
//# sourceMappingURL=index.dev.js.map
