import React from "react";
import Cookie from "cookie-universal";
import { Navigate, Outlet } from "react-router-dom";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import api from "@/Api/axios";
import { USER } from "@/Api/Api";
import Forbidden from "./Forbidden";

const RequireAuth = ({ AllowedRole, children }) => {
  const cookie = Cookie();
  const token = cookie.get("e-commerce");

  if (!token) return <Navigate to="/login" replace />;

  const queryClient = useQueryClient();

  // Try reading user from cache first
  let user = queryClient.getQueryData(["user"]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get(`${USER}`);
      return res.data;
    },
    retry: false,
    enabled: !user, // only fetch if not cached
  });

  if (isLoading) return;
  if (isError) return <Navigate to="/login" replace />;

  // Use cached or fetched data
  user = user || data;

  return AllowedRole.includes(String(user.role)) ? (
    <Outlet />
  ) : (
    <Forbidden
      link={user.role === "1996" ? "/adminlayout/writer" : "/"}
      text={user.role === "1996" ? "Go To Writer Page" : "Go to Home Page"}
    />
  );
};

export default RequireAuth;
