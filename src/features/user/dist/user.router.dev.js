"use strict";

var express = require("express");

var app = express.Router();

var User = require("./user.model");

app.post("/login", function _callee(req, res) {
  var _req$body, email, password, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context.sent;

          if (user) {
            if (user.password === password) {
              res.send({
                token: "".concat(email, "#").concat(password)
              });
            } else {
              res.status(401).send("password is not match");
            }
          } else {
            res.status(404).send("user not found");
          }

          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(404).send(_context.t0.massage);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
app.post("/signup", function _callee2(req, res) {
  var _req$body2, name, surname, email, password, existUser, user;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, name = _req$body2.name, surname = _req$body2.surname, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          existUser = _context2.sent;

          if (!existUser) {
            _context2.next = 9;
            break;
          }

          res.status(404).send("email id already exist try another email");
          _context2.next = 13;
          break;

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(User.create({
            name: name,
            surname: surname,
            email: email,
            password: password
          }));

        case 11:
          user = _context2.sent;
          res.send({
            token: "".concat(email, "#").concat(password)
          });

        case 13:
          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](1);
          res.status(404).send(_context2.t0.massage);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 15]]);
});
module.exports = app;
//# sourceMappingURL=user.router.dev.js.map
