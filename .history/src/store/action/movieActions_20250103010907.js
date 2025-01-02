import {createAsyncThunk} from '@reduxjs/toolkit';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(BASE_URL, params);
    console.log(response);
    return response.data.results;
  },
);
