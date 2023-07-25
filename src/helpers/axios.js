import { api } from "../urlConfig";
import axios from "axios";

let value
if (typeof window !== "undefined") {
  value = localStorage.getItem("token") || ""
}
const axiosInstance = axios.create({
  baseURL:api,
  headers:{
    'Authorization':'bearer '+value 
  }
})

export default axiosInstance