import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortId: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortId(state, action) {
      state.sortId = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export const { setSortId } = filterSlice.actions;

export default filterSlice.reducer;
