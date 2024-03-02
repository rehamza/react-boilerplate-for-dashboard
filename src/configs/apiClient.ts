import axios from 'axios';
import { environment } from './environments/environment';

const apiClient = axios.create({
  baseURL: environment.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
