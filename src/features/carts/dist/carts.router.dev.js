"use strict";

var express = require("express");

var Carts = require("./carts.model");

var app = express.Router();
app.get("/", function _callee(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Carts.find());

        case 3:
          data = _context.sent;
          res.send(data);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.send(_context.t0.massage);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = app;
//# sourceMappingURL=carts.router.dev.js.map
