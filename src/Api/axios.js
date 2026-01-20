import axios from "axios";
import {baseURL} from "@/Api/Api"
import Cookie from "cookie-universal"
const cookie=Cookie()

 const api = axios.create({
  baseURL: baseURL,
  headers:{
    Accept:"application/json",
  },
});

api.interceptors.request.use((config)=>{
const token=cookie.get("e-commerce")
if(token){
    config.headers.Authorization=`Bearer ${token}`
}
return config
},(error)=>Promise.reject(error))
export default api