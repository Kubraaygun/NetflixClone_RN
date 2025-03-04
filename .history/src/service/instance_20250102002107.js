import axios from 'axios';
import {BASE_URL} from './url';
import {API_KEY} from '../utils/constants';
const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.params = {
  api_key: API_KEY,
};
Client.defaults.headers = {
  acceps: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token} `,
};
export default Client;
