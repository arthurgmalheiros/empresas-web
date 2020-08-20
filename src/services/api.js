import axios from "axios";

const api = axios.create({
  baseUrl: process.env.API_URL
});

export default api;
