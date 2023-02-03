import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSchoolPosts = createAsyncThunk('schoolposts/fetchSchoolPosts', async () => {
  const { data } = await axios.get('/schoolposts');
  console.log(11111111111111111111111111111111111111111111111111111);
  console.log(data);
  return data;
});

export const fetchTags = createAsyncThunk('schoolposts/fetchTags', async () => {
  const { data } = await axios.get('/tags');
  return data;
});

export const fetchRemoveSchoolPost = createAsyncThunk(
  'schoolposts/fetchRemoveSchoolPost',
  async (id) => {
    axios.delete(`/schoolposts/${id}`);
  },
);

const initialState = {
  schoolposts: {
    items: [],
    status: 'loading',
  },
  tags: {
    items: [],
    status: 'loading',
  },
};

const schoolpostsSlice = createSlice({
  name: 'schoolposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSchoolPosts.pending]: (state, actions) => {
      state.schoolposts.items = [];
      state.schoolposts.status = 'loading';
    },
    [fetchSchoolPosts.fulfilled]: (state, action) => {
      state.schoolposts.items = action.payload;
      state.schoolposts.status = 'loaded';
    },
    [fetchSchoolPosts.rejected]: (state) => {
      state.schoolposts.items = [];
      state.schoolposts.status = 'error';
    },

    [fetchTags.pending]: (state) => {
      state.tags.items = [];
      state.tags.status = 'loading';
    },
    [fetchTags.fulfilled]: (state, action) => {
      state.tags.items = action.payload;
      state.tags.status = 'loaded';
    },
    [fetchTags.rejected]: (state) => {
      state.tags.items = [];
      state.tags.status = 'error';
    },

    [fetchRemoveSchoolPost.pending]: (state, action) => {
      state.schoolposts.items = state.schoolposts.items.filter(
        (obj) => obj._id !== action.meta.arg,
      );
    },
  },
});

export const schoolpostsReducer = schoolpostsSlice.reducer;
