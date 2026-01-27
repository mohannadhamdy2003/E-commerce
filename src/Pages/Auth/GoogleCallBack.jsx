import { baseURL, GOOGLE_CALL_BACK } from "@/Api/Api";
import api from "@/Api/axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal"
const GoogleCallBack = () => {
    const cookie=Cookie()
    const location=useLocation()
  useEffect(() => {
    async function googlecall() {
      try {
        const res=await api.get(`${baseURL}${GOOGLE_CALL_BACK}${location.search}`);
        console.log(res)
        const token=res.data.access_token
        cookie.set("e-commerce",token)
      } catch (err) {
        console.log(err);
      }
    }
    googlecall();
  },[]);
  return <div>GoogleCallBack</div>;
};

export default GoogleCallBack;
