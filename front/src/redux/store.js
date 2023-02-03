import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { posts1Reducer } from './slices/posts1';
import { posts2Reducer } from './slices/posts2';
import { posts3Reducer } from './slices/posts3';
import { posts4Reducer } from './slices/posts4';
import { schoolpostsReducer } from './slices/schoolposts';
import { authReducer } from './slices/auth';
import filter from './slices/filterSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    posts1: posts1Reducer,
    posts2: posts2Reducer,
    posts3: posts3Reducer,
    posts4: posts4Reducer,
    auth: authReducer,
    schoolposts: schoolpostsReducer,
    filter,
  },
});

export default store;
