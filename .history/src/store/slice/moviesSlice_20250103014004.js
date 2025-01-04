import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  topRatedMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies', //slice adi
  initialState,
  reducers: {
    addNewList: (state, action) => {
      state.whatchList = [...state.whatchList, action.payload];
    },
  },
});

export const {addNewList} = whatchListSlice.actions;
export default whatchListSlice.reducer;
