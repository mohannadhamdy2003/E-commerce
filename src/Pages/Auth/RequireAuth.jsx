import React, {  useState } from "react";
import Cookie from "cookie-universal";
import { Navigate, Outlet } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import api from "@/Api/axios";
import {  USER } from "@/Api/Api";
import Forbidden from "./Forbidden";

const RequireAuth = ({AllowedRole}) => {
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get(`${USER}`);
      
      
      return res.data;
    },
    retry: false,
  });
  
  if (isLoading) {
    return;
  }


  if (isError) return <Navigate to="/login" replace />;
  return AllowedRole.includes(data.role)?<Outlet />:<Forbidden/>
  
};

export default RequireAuth;
