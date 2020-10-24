import axios from 'axios';

export const URL = 'http://192.168.42.217:8000';
export const API = axios.create({
  baseURL: `${URL}/api/v1`,
});

export const setAuthToken = (token) => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  API.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded';
  API.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
};
