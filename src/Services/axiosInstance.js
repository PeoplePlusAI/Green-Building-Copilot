import axios from "axios";
import store from "../StoreIndex";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // try {
    //   const originalRequest = error.config;

    //   if (error.response.status === 401 && !originalRequest._retry) {
    //     originalRequest._retry = true;
    //     if (error.response.data.message === "Token expired") {
    //       await store.dispatch(handlerefreshToken());
    //       return axiosInstance(originalRequest);
    //     }
    //   }
    // } catch (err) {
    //   return Promise.reject(err);
    // }

    // if (error.code === "ERR_BAD_REQUEST") {
    //   const errObj = { ...error }
    //   errObj.response.data = {
    //     success: false,
    //     data: {},
    //     message: errObj.response.data.message ? errObj.response.data.message : "ERR_BAD_REQUEST"
    //   }

    //   return Promise.reject(errObj);
    // } else {
    return Promise.reject(error);
    // }
  }
);


axiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state?.commonState?.token;

  //Bearer token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

export default axiosInstance;