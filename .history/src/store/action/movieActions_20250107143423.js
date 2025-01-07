import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  CATEGORIES_URL,
  POPULAR_MOVIE_URL,
  TOP_RATED_MOVIE_URL,
  UPCOMING_MOVIE_URL,
} from '../../service/url';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_MOVIE_URL, params);

    return response.data.results;
  },
);

const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async params => {
    const response = await getRequest(POPULAR_MOVIE_URL, params);

    return response.data.results;
  },
);

const getCategories = createAsyncThunk('movies/getCategories', async params => {
  const response = await getRequest(CATEGORIES_URL, params);

  return response.data.genres;
});

const getUpComingMovies = createAsyncThunk(
  'movies/getUpComingMovies',
  async params => {
    const response = await getRequest(UPCOMING_MOVIE_URL, params);

    return response.data.genres;
  },
);
export {getTopRatedMovies, getCategories, getPopularMovies, getUpComingMovies};
