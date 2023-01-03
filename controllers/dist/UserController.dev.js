"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMe = exports.register = exports.login = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _User = _interopRequireDefault(require("../models/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var login = function login(req, res) {
  var user, isValidPass, token, _user$_doc, passwordHash, userData;

  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_User["default"].findOne({
            email: req.body.email
          }));

        case 3:
          user = _context.sent;

          if (user) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            message: 'Пользователь не найден'
          }));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(_bcrypt["default"].compare(req.body.password, user._doc.passwordHash));

        case 8:
          isValidPass = _context.sent;

          if (isValidPass) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'Неверный логин или пароль'
          }));

        case 11:
          token = _jsonwebtoken["default"].sign({
            _id: user._id
          }, 'secret123', {
            expiresIn: '30d'
          });
          _user$_doc = user._doc, passwordHash = _user$_doc.passwordHash, userData = _objectWithoutProperties(_user$_doc, ["passwordHash"]);
          res.json(_objectSpread({}, userData, {
            token: token
          }));
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            message: "не удалось авторизоваться"
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
};

exports.login = login;

var register = function register(req, res) {
  var password, salt, hash, doc, user, token, _user$_doc2, passwordHash, userData;

  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          password = req.body.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_bcrypt["default"].genSalt(10));

        case 4:
          salt = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(_bcrypt["default"].hash(password, salt));

        case 7:
          hash = _context2.sent;
          doc = new _User["default"]({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash
          });
          _context2.next = 11;
          return regeneratorRuntime.awrap(doc.save());

        case 11:
          user = _context2.sent;
          token = _jsonwebtoken["default"].sign({
            _id: user._id
          }, 'secret123', {
            expiresIn: '30d'
          });
          _user$_doc2 = user._doc, passwordHash = _user$_doc2.passwordHash, userData = _objectWithoutProperties(_user$_doc2, ["passwordHash"]);
          res.json(_objectSpread({}, userData, {
            token: token
          }));
          _context2.next = 21;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            message: "не удалось зарегистрироваться"
          });

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 17]]);
};

exports.register = register;

var getMe = function getMe(req, res) {
  var user, _user$_doc3, passwordHash, userData;

  return regeneratorRuntime.async(function getMe$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_User["default"].findById(req.userId));

        case 3:
          user = _context3.sent;

          if (user) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'Пользователь не найден'
          }));

        case 6:
          _user$_doc3 = user._doc, passwordHash = _user$_doc3.passwordHash, userData = _objectWithoutProperties(_user$_doc3, ["passwordHash"]);
          res.json(userData);
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            message: "Пользователь не найден"
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getMe = getMe;