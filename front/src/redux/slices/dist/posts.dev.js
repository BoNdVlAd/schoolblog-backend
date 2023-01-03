"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postsReducer = exports.fetchRemovePost = exports.fetchTags = exports.fetchPosts = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchPosts = (0, _toolkit.createAsyncThunk)('posts/fetchPosts', function _callee() {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/posts'));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchPosts = fetchPosts;
var fetchTags = (0, _toolkit.createAsyncThunk)('posts/fetchTags', function _callee2() {
  var _ref2, data;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/tags'));

        case 2:
          _ref2 = _context2.sent;
          data = _ref2.data;
          return _context2.abrupt("return", data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.fetchTags = fetchTags;
var fetchRemovePost = (0, _toolkit.createAsyncThunk)('posts/fetchRemovePost', function _callee3(id) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _axios["default"]["delete"]("/posts/".concat(id));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchRemovePost = fetchRemovePost;
var initialState = {
  posts: {
    items: [],
    status: 'loading'
  },
  tags: {
    items: [],
    status: 'loading'
  }
};
var postsSlice = (0, _toolkit.createSlice)({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchPosts.pending, function (state, actions) {
    state.posts.items = [];
    state.posts.status = 'loading';
  }), _defineProperty(_extraReducers, fetchPosts.fulfilled, function (state, action) {
    state.posts.items = action.payload;
    state.posts.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchPosts.rejected, function (state) {
    state.posts.items = [];
    state.posts.status = 'error';
  }), _defineProperty(_extraReducers, fetchTags.pending, function (state) {
    state.tags.items = [];
    state.tags.status = 'loading';
  }), _defineProperty(_extraReducers, fetchTags.fulfilled, function (state, action) {
    state.tags.items = action.payload;
    state.tags.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchTags.rejected, function (state) {
    state.tags.items = [];
    state.tags.status = 'error';
  }), _defineProperty(_extraReducers, fetchRemovePost.pending, function (state, action) {
    state.posts.items = state.posts.items.filter(function (obj) {
      return obj._id != action.meta.arg;
    });
  }), _extraReducers)
});
var postsReducer = postsSlice.reducer;
exports.postsReducer = postsReducer;