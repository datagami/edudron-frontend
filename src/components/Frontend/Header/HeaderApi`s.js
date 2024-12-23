import axios from "axios";
const auth = JSON.parse(localStorage.getItem("login_result"));

export const BASE_API_URL = process.env.REACT_APPBASE_API_URL;
export const BASE_URL_IMAGE = process.env.REACT_APP_IMAGE_BASE_URL;

export const api_instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: auth?.access_token,
  },
});

// export const api_instance2 = axios.create({
//   baseURL: process.env.REACT_APP_SECONDARY_API_URL,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     Authorization: auth?.access_token,
//   },
//   transformRequest: [
//     (data, headers) => {
//       if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
//         return Object.entries(data)
//           .map(
//             ([key, value]) =>
//               `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//           )
//           .join("&");
//       }
//       return data;
//     },
//   ],
// });

export const baseurl = process.env.REACT_APPBASE_API_URL;
export const common_token = auth?.access_token;
