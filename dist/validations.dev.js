"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post4CreateValidation = exports.post3CreateValidation = exports.post2CreateValidation = exports.post1CreateValidation = exports.schoolpostCreateValidation = exports.postCreateValidation = exports.registerValidation = exports.loginValidation = void 0;

var _expressValidator = require("express-validator");

var loginValidation = [(0, _expressValidator.body)('email').isEmail(), (0, _expressValidator.body)('password').isLength({
  min: 5
})];
exports.loginValidation = loginValidation;
var registerValidation = [(0, _expressValidator.body)('email', 'Неверный формат почты').isEmail(), (0, _expressValidator.body)('password', 'Пароль должен быть минимум 5 символов').isLength({
  min: 5
}), (0, _expressValidator.body)('fullName', 'NAME IS NOT CORRECT').isLength({
  min: 3
}), (0, _expressValidator.body)('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL()];
exports.registerValidation = registerValidation;
var postCreateValidation = [(0, _expressValidator.body)('title', 'Введите заголовок статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('text', 'Введите текст статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(), (0, _expressValidator.body)('imageUrl', 'Неверная ссылка на изображение').optional().isString(), (0, _expressValidator.body)('ImageUrlAll', 'Неверная ссылка на изображение').optional()];
exports.postCreateValidation = postCreateValidation;
var schoolpostCreateValidation = [(0, _expressValidator.body)('title', 'Введите заголовок статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('text', 'Введите текст статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(), (0, _expressValidator.body)('imageUrl', 'Неверная ссылка на изображение').optional().isString(), (0, _expressValidator.body)('ImageUrlAll', 'Неверная ссылка на изображение').optional()];
exports.schoolpostCreateValidation = schoolpostCreateValidation;
var post1CreateValidation = [(0, _expressValidator.body)('title', 'Введите заголовок статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('text', 'Введите текст статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(), (0, _expressValidator.body)('imageUrl', 'Неверная ссылка на изображение').optional().isString(), (0, _expressValidator.body)('ImageUrlAll', 'Неверная ссылка на изображение').optional()];
exports.post1CreateValidation = post1CreateValidation;
var post2CreateValidation = [(0, _expressValidator.body)('title', 'Введите заголовок статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('text', 'Введите текст статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(), (0, _expressValidator.body)('imageUrl', 'Неверная ссылка на изображение').optional().isString(), (0, _expressValidator.body)('ImageUrlAll', 'Неверная ссылка на изображение').optional()];
exports.post2CreateValidation = post2CreateValidation;
var post3CreateValidation = [(0, _expressValidator.body)('title', 'Введите заголовок статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('text', 'Введите текст статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(), (0, _expressValidator.body)('imageUrl', 'Неверная ссылка на изображение').optional().isString(), (0, _expressValidator.body)('ImageUrlAll', 'Неверная ссылка на изображение').optional()];
exports.post3CreateValidation = post3CreateValidation;
var post4CreateValidation = [(0, _expressValidator.body)('title', 'Введите заголовок статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('text', 'Введите текст статьи').isLength({
  min: 3
}).isString(), (0, _expressValidator.body)('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(), (0, _expressValidator.body)('imageUrl', 'Неверная ссылка на изображение').optional().isString(), (0, _expressValidator.body)('ImageUrlAll', 'Неверная ссылка на изображение').optional()];
exports.post4CreateValidation = post4CreateValidation;