import { body } from 'express-validator';

export const loginValidation = [body('email').isEmail(), body('password').isLength({ min: 5 })];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
  body('fullName', 'NAME IS NOT CORRECT').isLength({ min: 3 }),
  body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  body('ImageUrlAll', 'Неверная ссылка на изображение').optional(),
];
export const schoolpostCreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  body('ImageUrlAll', 'Неверная ссылка на изображение').optional(),
];
export const post1CreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  body('ImageUrlAll', 'Неверная ссылка на изображение').optional(),
];
export const post2CreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  body('ImageUrlAll', 'Неверная ссылка на изображение').optional(),
];
export const post3CreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  body('ImageUrlAll', 'Неверная ссылка на изображение').optional(),
];
export const post4CreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тэгов (кажите массив)').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
  body('ImageUrlAll', 'Неверная ссылка на изображение').optional(),
];
