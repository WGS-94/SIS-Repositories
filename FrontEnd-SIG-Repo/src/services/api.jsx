import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

//export const frontURL = process.env.REACT_APP_FRONT_URL;

export default api;