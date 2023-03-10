import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { API_URL } from "./config";

axios.defaults.baseURL = API_URL;

// Add a request interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  token && config.headers.set("Authorization", `Bearer ${token}`);
  return config;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
