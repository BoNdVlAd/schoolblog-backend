"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _posts = require("./slices/posts");

var _auth = require("./slices/auth");

var store = (0, _toolkit.configureStore)({
  reducer: {
    posts: _posts.postsReducer,
    auth: _auth.authReducer
  }
});
var _default = store;
exports["default"] = _default;