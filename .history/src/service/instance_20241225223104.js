import axios from 'axios';
import {BASE_URL} from './url';
const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.headers = {
  acceps: 'application/json',
  'Content-Type': 'application/json',
};
export default Client;
