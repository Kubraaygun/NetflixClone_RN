// src/store.js
import {configureStore} from '@reduxjs/toolkit';
import whatchListSlice from './slice/whatchListSlice';

export const store = configureStore({
  reducer: {
    watchList: whatchListSlice,
  },
});
