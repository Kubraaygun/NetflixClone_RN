import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '../../service/url';
import {getRequest} from '../../service/verbs';

const getUsers = createAsyncThunk('users/getUsers', async params => {
  const response = await getRequest(BASE_URL, params);
  console.log(response);
  return response.data.results;
});
export {getUsers};
