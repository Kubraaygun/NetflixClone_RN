import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {BASE_URL} from '../../service/url';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(BASE_URL, params);
    console.log(response);
    return response.data.results;
  },
);
export {getTopRatedMovies};
