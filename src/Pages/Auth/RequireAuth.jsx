import React, { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";
import { useQuery } from "@tanstack/react-query";
import api from "@/Api/axios";
import { baseURL, USER } from "@/Api/Api";

const RequireAuth = () => {
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

  //   console.log(data)
  if (isLoading) {
    return;
  }

  if (isError) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default RequireAuth;
