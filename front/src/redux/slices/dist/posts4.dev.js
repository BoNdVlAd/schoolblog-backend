"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posts4Reducer = exports.fetchRemovePost4 = exports.fetchTags4 = exports.fetchPosts4 = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchPosts4 = (0, _toolkit.createAsyncThunk)('posts4/fetchPosts4', function _callee() {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/posts4'));

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
exports.fetchPosts4 = fetchPosts4;
var fetchTags4 = (0, _toolkit.createAsyncThunk)('posts4/fetchTags4', function _callee2() {
  var _ref2, data;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/tags1'));

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
exports.fetchTags4 = fetchTags4;
var fetchRemovePost4 = (0, _toolkit.createAsyncThunk)('posts4/fetchRemovePost4', function _callee3(id) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _axios["default"]["delete"]("/posts4/".concat(id));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchRemovePost4 = fetchRemovePost4;
var initialState = {
  posts4: {
    items: [],
    status: 'loading'
  },
  tags4: {
    items: [],
    status: 'loading'
  }
};
var posts4Slice = (0, _toolkit.createSlice)({
  name: 'posts4',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchPosts4.pending, function (state, actions) {
    state.posts4.items = [];
    state.posts4.status = 'loading';
  }), _defineProperty(_extraReducers, fetchPosts4.fulfilled, function (state, action) {
    state.posts4.items = action.payload;
    state.posts4.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchPosts4.rejected, function (state) {
    state.posts4.items = [];
    state.posts4.status = 'error';
  }), _defineProperty(_extraReducers, fetchTags4.pending, function (state) {
    state.tags4.items = [];
    state.tags4.status = 'loading';
  }), _defineProperty(_extraReducers, fetchTags4.fulfilled, function (state, action) {
    state.tags4.items = action.payload;
    state.tags4.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchTags4.rejected, function (state) {
    state.tags4.items = [];
    state.tags4.status = 'error';
  }), _defineProperty(_extraReducers, fetchRemovePost4.pending, function (state, action) {
    state.posts4.items = state.posts4.items.filter(function (obj) {
      return obj._id != action.meta.arg;
    });
  }), _extraReducers)
});
var posts4Reducer = posts4Slice.reducer;
exports.posts4Reducer = posts4Reducer;