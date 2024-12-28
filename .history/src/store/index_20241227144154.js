// src/store.js
import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slice/userSlice'; // 'userSlice' dosyasını doğru konumdan import edin

export const store = configureStore({
  reducer: {
    watchList: userSlice, // 'user' state'i 'userSlice' ile yönetilecek
  },
});
