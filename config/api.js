import axios from "axios";
const api = axios.create({ baseURL: "https://bookstore-zbwm.onrender.com/api" });
export default api;