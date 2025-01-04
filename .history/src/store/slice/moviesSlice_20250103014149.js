import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  topRatedMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies', //slice adi
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.pending = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export const {addNewList} = whatchListSlice.actions;
export default whatchListSlice.reducer;
