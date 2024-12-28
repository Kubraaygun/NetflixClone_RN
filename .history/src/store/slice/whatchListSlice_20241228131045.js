import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  whatchList: [],
};

const whatchListSlice = createSlice({
  name: 'whatchList',
  initialState,
  reducers: {
    addNewList: (state, action) => {
      state.whatchList = [...state.whatchList, action.payload];
    },
  },
});

export default whatchListSlice.reducer;
