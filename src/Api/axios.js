import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-cfd41/us-central1/api",
  baseURL: "https://api-rzohlyxfbq-uc.a.run.app/",
});

export default axiosInstance;
