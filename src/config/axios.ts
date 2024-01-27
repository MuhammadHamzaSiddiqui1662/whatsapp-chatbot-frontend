import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://calm-crag-67242-9c4818c543b7.herokuapp.com/"
      : "http://localhost:3000/",
  headers: {
    common: {
      Authorization: `Bearer ${
        localStorage.getItem("jwt")
          ? JSON.parse(localStorage.getItem("jwt")!).jwtToken
          : ""
      }`,
    },
  },
});
