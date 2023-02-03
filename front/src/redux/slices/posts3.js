import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPosts3 = createAsyncThunk('posts3/fetchPosts3', async () => {
  const { data } = await axios.get('/posts3');
  return data;
});

export const fetchTags3 = createAsyncThunk('posts3/fetchTags3', async () => {
  const { data } = await axios.get('/tags1');
  return data;
});

export const fetchRemovePost3 = createAsyncThunk('posts3/fetchRemovePost3', async (id) => {
  axios.delete(`/posts3/${id}`);
});

const initialState = {
  posts3: {
    items: [],
    status: 'loading',
  },
  tags3: {
    items: [],
    status: 'loading',
  },
};

const posts3Slice = createSlice({
  name: 'posts3',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts3.pending]: (state, actions) => {
      state.posts3.items = [];
      state.posts3.status = 'loading';
    },
    [fetchPosts3.fulfilled]: (state, action) => {
      state.posts3.items = action.payload;
      state.posts3.status = 'loaded';
    },
    [fetchPosts3.rejected]: (state) => {
      state.posts3.items = [];
      state.posts3.status = 'error';
    },

    [fetchTags3.pending]: (state) => {
      state.tags3.items = [];
      state.tags3.status = 'loading';
    },
    [fetchTags3.fulfilled]: (state, action) => {
      state.tags3.items = action.payload;
      state.tags3.status = 'loaded';
    },
    [fetchTags3.rejected]: (state) => {
      state.tags3.items = [];
      state.tags3.status = 'error';
    },

    [fetchRemovePost3.pending]: (state, action) => {
      state.posts3.items = state.posts3.items.filter((obj) => obj._id != action.meta.arg);
    },
  },
});

export const posts3Reducer = posts3Slice.reducer;
