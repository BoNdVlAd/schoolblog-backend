"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _posts = require("./slices/posts");

var _posts2 = require("./slices/posts1");

var _posts3 = require("./slices/posts2");

var _posts4 = require("./slices/posts3");

var _posts5 = require("./slices/posts4");

var _schoolposts = require("./slices/schoolposts");

var _auth = require("./slices/auth");

var _filterSlice = _interopRequireDefault(require("./slices/filterSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    posts: _posts.postsReducer,
    posts1: _posts2.posts1Reducer,
    posts2: _posts3.posts2Reducer,
    posts3: _posts4.posts3Reducer,
    posts4: _posts5.posts4Reducer,
    auth: _auth.authReducer,
    schoolposts: _schoolposts.schoolpostsReducer,
    filter: _filterSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;