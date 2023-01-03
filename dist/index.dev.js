"use strict";

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _validations = require("./validations.js");

var _index = require("./controllers/index.js");

var _index2 = require("./utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect('mongodb+srv://admin:admin@cluster0.tpknnxv.mongodb.net/blog?retryWrites=true&w=majority').then(function () {
  return console.log("DB ok");
})["catch"](function (err) {
  return console.log('DB error', err);
});

var app = (0, _express["default"])();

var storage = _multer["default"].diskStorage({
  destination: function destination(_, __, cb) {
    cb(null, "uploads");
  },
  filename: function filename(_, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use('/uploads', _express["default"]["static"]('uploads'));
app.post('/auth/login', _validations.loginValidation, _index2.handleValidationErrors, _index.UserController.login);
app.post('/auth/register', _validations.registerValidation, _index2.handleValidationErrors, _index.UserController.register);
app.get('/auth/me', _index2.checkAuth, _index.UserController.getMe);
app.post('/upload', _index2.checkAuth, upload.single('image'), function (req, res) {
  res.json({
    url: "/uploads/".concat(req.file.originalname)
  });
});
app.get('/tags', _index.PostController.getLastTags);
app.get('/posts', _index.PostController.getAll);
app.get('/posts/tags', _index.PostController.getLastTags);
app.get('/posts/:id', _index.PostController.getOne);
app.post('/posts', _index2.checkAuth, _validations.postCreateValidation, _index.PostController.create);
app["delete"]('/posts/:id', _index2.checkAuth, _index.PostController.remove);
app.patch('/posts/:id', _index2.checkAuth, _validations.postCreateValidation, _index.PostController.update);
/*
app.get('/',(req, res)=>{
    res.send("hello world, Vlad")
});
*/

app.listen(4444, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});