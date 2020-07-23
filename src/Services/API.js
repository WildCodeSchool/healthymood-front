import axios from 'axios';
const baseURL = process.env.REACT_APP_API_BASE_URL;

const API = axios.create({ baseURL });

const placeTokenInRequestHeaders = req => {
  const token = window.localStorage.getItem('authToken');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
};

API.interceptors.request.use(placeTokenInRequestHeaders);

const logoutIfUnauthorizedOrForbidden = error => {
  if (error.response.status === 401 || error.response.status === 403) {
    console.log('redirecting to /login', error.response);
    window.localStorage.setItem('authToken', '');
    window.localStorage.setItem('isConnected', false);
    window.location.replace('/login');
  } else {
    return Promise.reject(error);
  }
};

API.interceptors.response.use(res => res, logoutIfUnauthorizedOrForbidden);

export default API;
