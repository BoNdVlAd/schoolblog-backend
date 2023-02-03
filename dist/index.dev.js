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
  return console.log('DB ok');
})["catch"](function (err) {
  return console.log('DB error', err);
});

var app = (0, _express["default"])();

var storage = _multer["default"].diskStorage({
  destination: function destination(_, __, cb) {
    cb(null, 'uploads');
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
app.get('/posts/:id', _index.PostController.getOne); // ----------------------------------

app.get('/schoolposts', _index.SchoolPostController.getAll);
app.get('/schoolposts/tags', _index.SchoolPostController.getLastTags);
app.get('/schoolposts/:id', _index.SchoolPostController.getOne);
app.post('/schoolposts', _index2.checkAuth, _validations.schoolpostCreateValidation, _index.SchoolPostController.create);
app["delete"]('/schoolposts/:id', _index2.checkAuth, _index.SchoolPostController.remove);
app.patch('/schoolposts/:id', _index2.checkAuth, _validations.schoolpostCreateValidation, _index.SchoolPostController.update); // ----------------------------------

app.get('/posts1', _index.Post1Controller.getAll);
app.get('/posts1/tags', _index.Post1Controller.getLastTags);
app.get('/posts1/:id', _index.Post1Controller.getOne);
app.post('/posts1', _index2.checkAuth, _validations.post1CreateValidation, _index.Post1Controller.create);
app["delete"]('/posts1/:id', _index2.checkAuth, _index.Post1Controller.remove);
app.patch('/posts1/:id', _index2.checkAuth, _validations.post1CreateValidation, _index.Post1Controller.update); // ----------------------------------

app.get('/posts2', _index.Post2Controller.getAll);
app.get('/posts2/tags', _index.Post2Controller.getLastTags);
app.get('/posts2/:id', _index.Post2Controller.getOne);
app.post('/posts2', _index2.checkAuth, _validations.post2CreateValidation, _index.Post2Controller.create);
app["delete"]('/posts2/:id', _index2.checkAuth, _index.Post2Controller.remove);
app.patch('/posts2/:id', _index2.checkAuth, _validations.post2CreateValidation, _index.Post2Controller.update); // ----------------------------------

app.get('/posts3', _index.Post3Controller.getAll);
app.get('/posts3/tags', _index.Post3Controller.getLastTags);
app.get('/posts3/:id', _index.Post3Controller.getOne);
app.post('/posts3', _index2.checkAuth, _validations.post3CreateValidation, _index.Post3Controller.create);
app["delete"]('/posts3/:id', _index2.checkAuth, _index.Post3Controller.remove);
app.patch('/posts3/:id', _index2.checkAuth, _validations.post3CreateValidation, _index.Post3Controller.update); // ----------------------------------

app.get('/posts4', _index.Post4Controller.getAll);
app.get('/posts4/tags', _index.Post4Controller.getLastTags);
app.get('/posts4/:id', _index.Post4Controller.getOne);
app.post('/posts4', _index2.checkAuth, _validations.post4CreateValidation, _index.Post4Controller.create);
app["delete"]('/posts4/:id', _index2.checkAuth, _index.Post4Controller.remove);
app.patch('/posts4/:id', _index2.checkAuth, _validations.post4CreateValidation, _index.Post4Controller.update); // ----------------------------------

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