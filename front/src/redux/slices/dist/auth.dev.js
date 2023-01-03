"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.authReducer = exports.selectIsAuth = exports.fetchRegister = exports.fetchAuthMe = exports.fetchAuth = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("../../axios"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchAuth = (0, _toolkit.createAsyncThunk)("auth/fetchAuth", function _callee(params) {
  var _ref, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('/auth/login', params));

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
exports.fetchAuth = fetchAuth;
var fetchAuthMe = (0, _toolkit.createAsyncThunk)("auth/fetchAuthMe", function _callee2() {
  var _ref2, data;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/auth/me'));

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
exports.fetchAuthMe = fetchAuthMe;
var fetchRegister = (0, _toolkit.createAsyncThunk)("auth/fetchRegister", function _callee3(params) {
  var _ref3, data;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('/auth/register', params));

        case 2:
          _ref3 = _context3.sent;
          data = _ref3.data;
          return _context3.abrupt("return", data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchRegister = fetchRegister;
var initialState = {
  data: null,
  status: 'loading'
};
var authSlice = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout: function logout(state) {
      state.data = null;
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchAuth.pending, function (state) {
    state.status = 'loading';
    state.data = null;
  }), _defineProperty(_extraReducers, fetchAuth.fulfilled, function (state, action) {
    state.status = 'loaded';
    state.data = action.payload;
  }), _defineProperty(_extraReducers, fetchAuth.rejected, function (state) {
    state.status = 'error';
    state.data = null;
  }), _defineProperty(_extraReducers, fetchAuthMe.pending, function (state) {
    state.status = 'loading';
    state.data = null;
  }), _defineProperty(_extraReducers, fetchAuthMe.fulfilled, function (state, action) {
    state.status = 'loaded';
    state.data = action.payload;
  }), _defineProperty(_extraReducers, fetchAuthMe.rejected, function (state) {
    state.status = 'error';
    state.data = null;
  }), _defineProperty(_extraReducers, fetchRegister.pending, function (state) {
    state.status = 'loading';
    state.data = null;
  }), _defineProperty(_extraReducers, fetchRegister.fulfilled, function (state, action) {
    state.status = 'loaded';
    state.data = action.payload;
  }), _defineProperty(_extraReducers, fetchRegister.rejected, function (state) {
    state.status = 'error';
    state.data = null;
  }), _extraReducers)
});

var selectIsAuth = function selectIsAuth(state) {
  return Boolean(state.auth.data);
};

exports.selectIsAuth = selectIsAuth;
var authReducer = authSlice.reducer;
exports.authReducer = authReducer;
var logout = authSlice.actions.logout;
exports.logout = logout;