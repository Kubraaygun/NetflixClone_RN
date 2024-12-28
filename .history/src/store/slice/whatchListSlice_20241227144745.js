import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  whatchList: [],
};

const whatchListSlice = createSlice({
  name: 'whatchList',
  initialState,
  reducers: {},
});

export default whatchListSlice.reducer;
