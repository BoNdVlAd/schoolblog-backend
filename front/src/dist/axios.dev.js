'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _axios = _interopRequireDefault(require('axios'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var instance = _axios['default'].create({
  baseURL: 'http://localhost:4444',
});

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});
var _default = instance;
exports['default'] = _default;
