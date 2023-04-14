"use strict";

var express = require("express");

var app = express.Router();

var Men = require("./mens.model");

app.get("/", function _callee(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Men.find());

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
app["delete"]("/", function _callee2(req, res) {
  var exists;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Men.findOneAndDelete({
            id: req.body.id,
            name: req.body.name
          }));

        case 3:
          exists = _context2.sent;
          console.log(exists, req.body.id, req.body.name);
          res.status(200).send("Product deleted successfully");
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.send(_context2.t0.massage);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
app.post("/", function _callee3(req, res) {
  var s, men;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          s = req.body.data.area.split(",");
          console.log(s.length);
          res.send("SS");
          _context3.prev = 3;
          _context3.next = 6;
          return regeneratorRuntime.awrap(Men.create({
            id: s[0],
            name: s[1],
            quantity: s[2],
            defaultImage: s[3],
            hoverImage: s[4],
            price: s[5],
            strikePrice: s[6],
            firstImages: [],
            secondImages: [],
            thirdImages: []
          }));

        case 6:
          men = _context3.sent;
          res.status(200).send("Data Added Successfully");
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](3);
          res.status(404).send(_context3.t0.massage);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 10]]);
});
module.exports = app;
//# sourceMappingURL=mens.router.dev.js.map
