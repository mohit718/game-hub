import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface ApiRequestConfig extends AxiosRequestConfig {}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8805b05b8c7243bda31f768512774a4b",
  },
});

export { CanceledError };
