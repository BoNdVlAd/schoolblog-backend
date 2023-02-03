import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPosts1 = createAsyncThunk('posts1/fetchPosts1', async () => {
  const { data } = await axios.get('/posts1');
  return data;
});

export const fetchTags1 = createAsyncThunk('posts1/fetchTags1', async () => {
  const { data } = await axios.get('/tags1');
  return data;
});

export const fetchRemovePost1 = createAsyncThunk('posts1/fetchRemovePost1', async (id) => {
  axios.delete(`/posts1/${id}`);
});

const initialState = {
  posts1: {
    items: [],
    status: 'loading',
  },
  tags1: {
    items: [],
    status: 'loading',
  },
};

const posts1Slice = createSlice({
  name: 'posts1',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts1.pending]: (state, actions) => {
      state.posts1.items = [];
      state.posts1.status = 'loading';
    },
    [fetchPosts1.fulfilled]: (state, action) => {
      state.posts1.items = action.payload;
      state.posts1.status = 'loaded';
    },
    [fetchPosts1.rejected]: (state) => {
      state.posts1.items = [];
      state.posts1.status = 'error';
    },

    [fetchTags1.pending]: (state) => {
      state.tags1.items = [];
      state.tags1.status = 'loading';
    },
    [fetchTags1.fulfilled]: (state, action) => {
      state.tags1.items = action.payload;
      state.tags1.status = 'loaded';
    },
    [fetchTags1.rejected]: (state) => {
      state.tags1.items = [];
      state.tags1.status = 'error';
    },

    [fetchRemovePost1.pending]: (state, action) => {
      state.posts1.items = state.posts1.items.filter((obj) => obj._id != action.meta.arg);
    },
  },
});

export const posts1Reducer = posts1Slice.reducer;
