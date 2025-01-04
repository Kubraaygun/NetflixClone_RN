import {createSlice} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../action/movieActions';
const initialState = {
  topRatedMovies: [],
  pending: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies', //slice adi
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending.topRatedMovies = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.pending.topRatedMovies = false;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending.topRatedMovies = false;
      });
  },
});

export default moviesSlice.reducer;
