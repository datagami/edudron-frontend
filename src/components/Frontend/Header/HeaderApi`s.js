import axios from "axios";
const auth = JSON.parse(localStorage.getItem("login_result"));

// const BASR_URL = `https://api.edudron.in`;
const BASR_URL = `http://localhost:5000`;

export const BASE_URL_IMAGE = "http://localhost:5000/images";

// console.log(auth.access_token)
export const api_instance = axios.create({
  baseURL: BASR_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: auth?.access_token,
  },
});

export const api_instance2 = axios.create({
  baseURL: "https://api.edudron.in",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: auth?.access_token,
  },
  transformRequest: [
    (data, headers) => {
      if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
        return Object.entries(data)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join("&");
      }
      return data;
    },
  ],
});

export const baseurl = "http://localhost:5000";
export const common_token = auth?.access_token;
