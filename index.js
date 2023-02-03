import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import cors from 'cors';

import {
  registerValidation,
  loginValidation,
  postCreateValidation,
  post1CreateValidation,
  post2CreateValidation,
  post3CreateValidation,
  post4CreateValidation,
  schoolpostCreateValidation,
} from './validations.js';

import {
  UserController,
  PostController,
  SchoolPostController,
  Post1Controller,
  Post2Controller,
  Post3Controller,
  Post4Controller,
} from './controllers/index.js';

import { handleValidationErrors, checkAuth } from './utils/index.js';

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.tpknnxv.mongodb.net/blog?retryWrites=true&w=majority',
  )

  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());

app.use(cors());

app.use('/uploads', express.static('uploads'));

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});
app.get('/tags', PostController.getLastTags);
app.get('/posts', PostController.getAll);
app.get('/posts/tags', PostController.getLastTags);
app.get('/posts/:id', PostController.getOne);

// ----------------------------------

app.get('/schoolposts', SchoolPostController.getAll);
app.get('/schoolposts/tags', SchoolPostController.getLastTags);
app.get('/schoolposts/:id', SchoolPostController.getOne);

app.post('/schoolposts', checkAuth, schoolpostCreateValidation, SchoolPostController.create);
app.delete('/schoolposts/:id', checkAuth, SchoolPostController.remove);
app.patch('/schoolposts/:id', checkAuth, schoolpostCreateValidation, SchoolPostController.update);
// ----------------------------------

app.get('/posts1', Post1Controller.getAll);
app.get('/posts1/tags', Post1Controller.getLastTags);
app.get('/posts1/:id', Post1Controller.getOne);

app.post('/posts1', checkAuth, post1CreateValidation, Post1Controller.create);
app.delete('/posts1/:id', checkAuth, Post1Controller.remove);
app.patch('/posts1/:id', checkAuth, post1CreateValidation, Post1Controller.update);

// ----------------------------------

app.get('/posts2', Post2Controller.getAll);
app.get('/posts2/tags', Post2Controller.getLastTags);
app.get('/posts2/:id', Post2Controller.getOne);

app.post('/posts2', checkAuth, post2CreateValidation, Post2Controller.create);
app.delete('/posts2/:id', checkAuth, Post2Controller.remove);
app.patch('/posts2/:id', checkAuth, post2CreateValidation, Post2Controller.update);

// ----------------------------------
app.get('/posts3', Post3Controller.getAll);
app.get('/posts3/tags', Post3Controller.getLastTags);
app.get('/posts3/:id', Post3Controller.getOne);

app.post('/posts3', checkAuth, post3CreateValidation, Post3Controller.create);
app.delete('/posts3/:id', checkAuth, Post3Controller.remove);
app.patch('/posts3/:id', checkAuth, post3CreateValidation, Post3Controller.update);
// ----------------------------------
app.get('/posts4', Post4Controller.getAll);
app.get('/posts4/tags', Post4Controller.getLastTags);
app.get('/posts4/:id', Post4Controller.getOne);

app.post('/posts4', checkAuth, post4CreateValidation, Post4Controller.create);
app.delete('/posts4/:id', checkAuth, Post4Controller.remove);
app.patch('/posts4/:id', checkAuth, post4CreateValidation, Post4Controller.update);
// ----------------------------------

app.post('/posts', checkAuth, postCreateValidation, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth, postCreateValidation, PostController.update);

/*
app.get('/',(req, res)=>{
    res.send("hello world, Vlad")
});
*/

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
