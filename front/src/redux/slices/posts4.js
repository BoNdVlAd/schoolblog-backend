import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPosts4 = createAsyncThunk('posts4/fetchPosts4', async () => {
  const { data } = await axios.get('/posts4');
  return data;
});

export const fetchTags4 = createAsyncThunk('posts4/fetchTags4', async () => {
  const { data } = await axios.get('/tags1');
  return data;
});

export const fetchRemovePost4 = createAsyncThunk('posts4/fetchRemovePost4', async (id) => {
  axios.delete(`/posts4/${id}`);
});

const initialState = {
  posts4: {
    items: [],
    status: 'loading',
  },
  tags4: {
    items: [],
    status: 'loading',
  },
};

const posts4Slice = createSlice({
  name: 'posts4',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts4.pending]: (state, actions) => {
      state.posts4.items = [];
      state.posts4.status = 'loading';
    },
    [fetchPosts4.fulfilled]: (state, action) => {
      state.posts4.items = action.payload;
      state.posts4.status = 'loaded';
    },
    [fetchPosts4.rejected]: (state) => {
      state.posts4.items = [];
      state.posts4.status = 'error';
    },

    [fetchTags4.pending]: (state) => {
      state.tags4.items = [];
      state.tags4.status = 'loading';
    },
    [fetchTags4.fulfilled]: (state, action) => {
      state.tags4.items = action.payload;
      state.tags4.status = 'loaded';
    },
    [fetchTags4.rejected]: (state) => {
      state.tags4.items = [];
      state.tags4.status = 'error';
    },

    [fetchRemovePost4.pending]: (state, action) => {
      state.posts4.items = state.posts4.items.filter((obj) => obj._id != action.meta.arg);
    },
  },
});

export const posts4Reducer = posts4Slice.reducer;
