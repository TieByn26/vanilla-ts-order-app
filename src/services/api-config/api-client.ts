import axios from "axios";

// Set up default URL for axios
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL_SERVER ||"/api", 
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  