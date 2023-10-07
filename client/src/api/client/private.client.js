import axios from "axios";
import queryString from "query-string";

const baseURL = "http://127.0.0.1:5000";

const privateUser = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});

privateUser.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("actkn")}`
    }
  };
});

privateUser.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  throw err.response.data;
});

export default privateUser;