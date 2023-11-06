import axios from "axios";
import { IResult } from "../types";
import { BASE_URL, USER_TOKEN } from "../constant";
import { message } from "antd";

const instance = axios.create({
  timeout: 10 * 1000,
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      USER_TOKEN
    )}`;
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as IResult;
  const { code, data } = resData;
  if (code === 200) return data as any;
  else {
    message.error("网络错误");
  }
});

export default instance;
