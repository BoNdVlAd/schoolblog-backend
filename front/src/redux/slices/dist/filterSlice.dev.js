"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setSortId = exports.setCategoryId = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  categoryId: 0,
  sortId: 0
};
var filterSlice = (0, _toolkit.createSlice)({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSortId: function setSortId(state, action) {
      state.sortId = action.payload;
    },
    setCategoryId: function setCategoryId(state, action) {
      state.categoryId = action.payload;
    }
  }
});
var setCategoryId = filterSlice.actions.setCategoryId;
exports.setCategoryId = setCategoryId;
var setSortId = filterSlice.actions.setSortId;
exports.setSortId = setSortId;
var _default = filterSlice.reducer;
exports["default"] = _default;