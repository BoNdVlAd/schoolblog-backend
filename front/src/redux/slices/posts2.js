import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPosts2 = createAsyncThunk('posts2/fetchPosts2', async () => {
  const { data } = await axios.get('/posts2');
  return data;
});

export const fetchTags2 = createAsyncThunk('posts2/fetchTags2', async () => {
  const { data } = await axios.get('/tags2');
  return data;
});

export const fetchRemovePost2 = createAsyncThunk('posts2/fetchRemovePost2', async (id) => {
  axios.delete(`/posts2/${id}`);
});

const initialState = {
  posts2: {
    items: [],
    status: 'loading',
  },
  tags2: {
    items: [],
    status: 'loading',
  },
};

const posts2Slice = createSlice({
  name: 'posts2',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts2.pending]: (state, actions) => {
      state.posts2.items = [];
      state.posts2.status = 'loading';
    },
    [fetchPosts2.fulfilled]: (state, action) => {
      state.posts2.items = action.payload;
      state.posts2.status = 'loaded';
    },
    [fetchPosts2.rejected]: (state) => {
      state.posts2.items = [];
      state.posts2.status = 'error';
    },

    [fetchTags2.pending]: (state) => {
      state.tags2.items = [];
      state.tags2.status = 'loading';
    },
    [fetchTags2.fulfilled]: (state, action) => {
      state.tags2.items = action.payload;
      state.tags2.status = 'loaded';
    },
    [fetchTags2.rejected]: (state) => {
      state.tags2.items = [];
      state.tags2.status = 'error';
    },

    [fetchRemovePost2.pending]: (state, action) => {
      state.posts2.items = state.posts2.items.filter((obj) => obj._id != action.meta.arg);
    },
  },
});

export const posts2Reducer = posts2Slice.reducer;
