"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posts3Reducer = exports.fetchRemovePost3 = exports.fetchTags3 = exports.fetchPosts3 = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchPosts3 = (0, _toolkit.createAsyncThunk)('posts3/fetchPosts3', function _callee() {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/posts3'));

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
exports.fetchPosts3 = fetchPosts3;
var fetchTags3 = (0, _toolkit.createAsyncThunk)('posts3/fetchTags3', function _callee2() {
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
exports.fetchTags3 = fetchTags3;
var fetchRemovePost3 = (0, _toolkit.createAsyncThunk)('posts3/fetchRemovePost3', function _callee3(id) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _axios["default"]["delete"]("/posts3/".concat(id));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchRemovePost3 = fetchRemovePost3;
var initialState = {
  posts3: {
    items: [],
    status: 'loading'
  },
  tags3: {
    items: [],
    status: 'loading'
  }
};
var posts3Slice = (0, _toolkit.createSlice)({
  name: 'posts3',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchPosts3.pending, function (state, actions) {
    state.posts3.items = [];
    state.posts3.status = 'loading';
  }), _defineProperty(_extraReducers, fetchPosts3.fulfilled, function (state, action) {
    state.posts3.items = action.payload;
    state.posts3.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchPosts3.rejected, function (state) {
    state.posts3.items = [];
    state.posts3.status = 'error';
  }), _defineProperty(_extraReducers, fetchTags3.pending, function (state) {
    state.tags3.items = [];
    state.tags3.status = 'loading';
  }), _defineProperty(_extraReducers, fetchTags3.fulfilled, function (state, action) {
    state.tags3.items = action.payload;
    state.tags3.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchTags3.rejected, function (state) {
    state.tags3.items = [];
    state.tags3.status = 'error';
  }), _defineProperty(_extraReducers, fetchRemovePost3.pending, function (state, action) {
    state.posts3.items = state.posts3.items.filter(function (obj) {
      return obj._id != action.meta.arg;
    });
  }), _extraReducers)
});
var posts3Reducer = posts3Slice.reducer;
exports.posts3Reducer = posts3Reducer;