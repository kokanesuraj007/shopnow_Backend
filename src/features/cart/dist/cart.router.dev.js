"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var express = require("express");

var app = express.Router();

var Cart = require("./cart.model");

app.get("/", function _callee(req, res) {
  var _data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Cart.find());

        case 3:
          _data = _context.sent;
          res.send(_data);
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
app.post("/", function _callee2(req, res) {
  var exists, newData, h, _newData, _data2;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Cart.findOne({
            token: req.body.token
          }));

        case 3:
          exists = _context2.sent;
          console.log(req.body);

          if (!exists) {
            _context2.next = 15;
            break;
          }

          _context2.next = 8;
          return regeneratorRuntime.awrap(Cart.find({
            token: req.body.token
          }));

        case 8:
          newData = _context2.sent;
          console.log(newData);
          _context2.next = 12;
          return regeneratorRuntime.awrap(Cart.findOneAndUpdate({
            token: req.body.token
          }, {
            $set: {
              cartData: [].concat(_toConsumableArray(newData[0].cartData), [req.body.data])
            }
          }));

        case 12:
          h = _context2.sent;
          _context2.next = 20;
          break;

        case 15:
          _newData = {
            token: req.body.token,
            cartData: req.body.data
          };
          _context2.next = 18;
          return regeneratorRuntime.awrap(Cart.create(_newData));

        case 18:
          _data2 = _context2.sent;
          console.log(564);

        case 20:
          res.send(data);
          _context2.next = 26;
          break;

        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](0);
          res.send(_context2.t0.massage);

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 23]]);
});
app["delete"]("/", function _callee3(req, res) {
  var exists, newData, h;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Cart.findOne({
            token: req.body.token
          }));

        case 3:
          exists = _context3.sent;
          newData = exists.cartData.filter(function (el) {
            return el.id != req.body.id;
          });
          _context3.next = 7;
          return regeneratorRuntime.awrap(Cart.findOneAndUpdate({
            token: req.body.token
          }, {
            $set: {
              cartData: newData
            }
          }));

        case 7:
          h = _context3.sent;
          res.send(data);
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          res.send(_context3.t0.massage);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
module.exports = app;
//# sourceMappingURL=cart.router.dev.js.map
