"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posts2Reducer = exports.fetchRemovePost2 = exports.fetchTags2 = exports.fetchPosts2 = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchPosts2 = (0, _toolkit.createAsyncThunk)('posts2/fetchPosts2', function _callee() {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/posts2'));

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
exports.fetchPosts2 = fetchPosts2;
var fetchTags2 = (0, _toolkit.createAsyncThunk)('posts2/fetchTags2', function _callee2() {
  var _ref2, data;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/tags2'));

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
exports.fetchTags2 = fetchTags2;
var fetchRemovePost2 = (0, _toolkit.createAsyncThunk)('posts2/fetchRemovePost2', function _callee3(id) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _axios["default"]["delete"]("/posts2/".concat(id));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchRemovePost2 = fetchRemovePost2;
var initialState = {
  posts2: {
    items: [],
    status: 'loading'
  },
  tags2: {
    items: [],
    status: 'loading'
  }
};
var posts2Slice = (0, _toolkit.createSlice)({
  name: 'posts2',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchPosts2.pending, function (state, actions) {
    state.posts2.items = [];
    state.posts2.status = 'loading';
  }), _defineProperty(_extraReducers, fetchPosts2.fulfilled, function (state, action) {
    state.posts2.items = action.payload;
    state.posts2.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchPosts2.rejected, function (state) {
    state.posts2.items = [];
    state.posts2.status = 'error';
  }), _defineProperty(_extraReducers, fetchTags2.pending, function (state) {
    state.tags2.items = [];
    state.tags2.status = 'loading';
  }), _defineProperty(_extraReducers, fetchTags2.fulfilled, function (state, action) {
    state.tags2.items = action.payload;
    state.tags2.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchTags2.rejected, function (state) {
    state.tags2.items = [];
    state.tags2.status = 'error';
  }), _defineProperty(_extraReducers, fetchRemovePost2.pending, function (state, action) {
    state.posts2.items = state.posts2.items.filter(function (obj) {
      return obj._id != action.meta.arg;
    });
  }), _extraReducers)
});
var posts2Reducer = posts2Slice.reducer;
exports.posts2Reducer = posts2Reducer;