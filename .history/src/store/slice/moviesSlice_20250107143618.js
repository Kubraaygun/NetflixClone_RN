import {createSlice} from '@reduxjs/toolkit';
import {
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from '../action/movieActions';

const initialState = {
  topRatedMovies: [],
  popularMovies: [],
  upComingMovies: [],
  categories: [],
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
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.pending = false;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })

      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.pending = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })

      .addCase(getPopularMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
        state.pending = false;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })

      .addCase(getUpComingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getUpComingMovies.fulfilled, (state, action) => {
        state.upComingMovies = action.payload;
        state.pending = false;
      })
      .addCase(getUpComingMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export default moviesSlice.reducer;
