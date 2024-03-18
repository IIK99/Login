import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    baseURL: "http://localhost:2000",
  });
};
