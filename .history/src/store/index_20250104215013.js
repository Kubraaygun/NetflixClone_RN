// src/store.js
import {configureStore} from '@reduxjs/toolkit';
import whatchListSlice from './slice/whatchListSlice';
import moviesSlice from './slice/moviesSlice';

const store = configureStore({
  reducer: {
    watchList: whatchListSlice,
    movies: moviesSlice,
  },
});
export default store;
