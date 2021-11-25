import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  //Post
  async getPosts(query) {
    return apiClient.get("/posts" + query);
  },
  async getPost(id) {
    return apiClient.get("/posts/" + id);
  },
  //Category
  async getCats() {
    return apiClient.get("/categories");
  },
  //Auth
  async postAuth(data) {
    return apiClient.post("/auth/register", data);
  },
  async postLogin(data) {
    return apiClient.post("/auth/login", data);
  },
};
