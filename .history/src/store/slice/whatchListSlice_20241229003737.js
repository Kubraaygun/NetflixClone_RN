import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  whatchList: [
    {
      id: 1,
      title: 'All',
    },
    {
      id: 2,
      title: 'Funnny',
    },
    {
      id: 3,
      title: 'All',
    },
    {
      id: 4,
      title: 'Funnny',
    },
  ],
};

const whatchListSlice = createSlice({
  name: 'whatchList', //slice adi
  initialState,
  reducers: {
    addNewList: (state, action) => {
      state.whatchList = [...state.whatchList, action.payload];
    },
  },
});

export const {addNewList} = whatchListSlice.actions;
export default whatchListSlice.reducer;
