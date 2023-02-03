"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schoolpostsReducer = exports.fetchRemoveSchoolPost = exports.fetchTags = exports.fetchSchoolPosts = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchSchoolPosts = (0, _toolkit.createAsyncThunk)('schoolposts/fetchSchoolPosts', function _callee() {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/schoolposts'));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          console.log(11111111111111111111111111111111111111111111111111111);
          console.log(data);
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchSchoolPosts = fetchSchoolPosts;
var fetchTags = (0, _toolkit.createAsyncThunk)('schoolposts/fetchTags', function _callee2() {
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
var fetchRemoveSchoolPost = (0, _toolkit.createAsyncThunk)('schoolposts/fetchRemoveSchoolPost', function _callee3(id) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _axios["default"]["delete"]("/schoolposts/".concat(id));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchRemoveSchoolPost = fetchRemoveSchoolPost;
var initialState = {
  schoolposts: {
    items: [],
    status: 'loading'
  },
  tags: {
    items: [],
    status: 'loading'
  }
};
var schoolpostsSlice = (0, _toolkit.createSlice)({
  name: 'schoolposts',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchSchoolPosts.pending, function (state, actions) {
    state.schoolposts.items = [];
    state.schoolposts.status = 'loading';
  }), _defineProperty(_extraReducers, fetchSchoolPosts.fulfilled, function (state, action) {
    state.schoolposts.items = action.payload;
    state.schoolposts.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchSchoolPosts.rejected, function (state) {
    state.schoolposts.items = [];
    state.schoolposts.status = 'error';
  }), _defineProperty(_extraReducers, fetchTags.pending, function (state) {
    state.tags.items = [];
    state.tags.status = 'loading';
  }), _defineProperty(_extraReducers, fetchTags.fulfilled, function (state, action) {
    state.tags.items = action.payload;
    state.tags.status = 'loaded';
  }), _defineProperty(_extraReducers, fetchTags.rejected, function (state) {
    state.tags.items = [];
    state.tags.status = 'error';
  }), _defineProperty(_extraReducers, fetchRemoveSchoolPost.pending, function (state, action) {
    state.schoolposts.items = state.schoolposts.items.filter(function (obj) {
      return obj._id !== action.meta.arg;
    });
  }), _extraReducers)
});
var schoolpostsReducer = schoolpostsSlice.reducer;
exports.schoolpostsReducer = schoolpostsReducer;