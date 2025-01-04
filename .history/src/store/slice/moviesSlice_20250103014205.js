import {createSlice} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../action/movieActions';
const initialState = {
  topRatedMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies', //slice adi
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.users = action.payload;
        state.pending = false;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export const {addNewList} = whatchListSlice.actions;
export default whatchListSlice.reducer;
