"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posts1Reducer = exports.fetchRemovePost1 = exports.fetchTags1 = exports.fetchPosts1 = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchPosts1 = (0, _toolkit.createAsyncThunk)('posts1/fetchPosts1', function _callee() {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/posts1'));

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
exports.fetchPosts1 = fetchPosts1;
var fetchTags1 = (0, _toolkit.createAsyncThunk)('posts1/fetchTags1', function _callee2() {
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
exports.fetchTags1 = fetchTags1;
var fetchRemovePost1 = (0, _toolkit.createAsyncThunk)('posts1/fetchRemovePost1', function _callee3(id) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _axios["default"]["delete"]("/posts1/".concat(id));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchRemovePost1 = fetchRemovePost1;
var initialState = {
  posts1: {
    items: [],
    status: 'loading'
  },
  tags1: {
    items: [],
    status: 'loading'
  }
};
var posts1Slice = (0, _toolkit.createSlice)({
  name: 'posts1',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchPosts1.pending, function (state, actions) {
    state.posts1.items = [];
    state.posts1.status = 'loading';
  }), _defineProperty(_extraReducers, fetchPosts1.fulfilled, function (state, action) {
    state.posts1.items = action.payload;
    state.posts1.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchPosts1.rejected, function (state) {
    state.posts1.items = [];
    state.posts1.status = 'error';
  }), _defineProperty(_extraReducers, fetchTags1.pending, function (state) {
    state.tags1.items = [];
    state.tags1.status = 'loading';
  }), _defineProperty(_extraReducers, fetchTags1.fulfilled, function (state, action) {
    state.tags1.items = action.payload;
    state.tags1.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchTags1.rejected, function (state) {
    state.tags1.items = [];
    state.tags1.status = 'error';
  }), _defineProperty(_extraReducers, fetchRemovePost1.pending, function (state, action) {
    state.posts1.items = state.posts1.items.filter(function (obj) {
      return obj._id != action.meta.arg;
    });
  }), _extraReducers)
});
var posts1Reducer = posts1Slice.reducer;
exports.posts1Reducer = posts1Reducer;