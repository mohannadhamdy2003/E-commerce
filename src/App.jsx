import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./Pages/Website/AdminLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./Pages/Dashboard/Users";
import GoogleCallBack from "./Pages/Auth/GoogleCallBack";
import RequireAuth from "./Pages/Auth/RequireAuth";
import UpdateUser from "./Pages/Dashboard/UpdateUser";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddUser from "./Pages/Dashboard/AddUser";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Forbidden from "./Pages/Auth/Forbidden";
import Writer from "./Pages/Dashboard/Writer";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/google/callback" element={<GoogleCallBack />} />
          {/* Protected Routes */}
          
            <Route index element={<Dashboard />} />
            <Route path="/adminlayout" element={<AdminLayout />}>
              <Route element={<RequireAuth AllowedRole={["1995"]} />}>
                <Route path="users" element={<Users />} />
                <Route path="users/addUser" element={<AddUser />} />
                <Route path="users/:id" element={<UpdateUser />} />
            </Route>
                <Route element={<RequireAuth AllowedRole={["1996","1995"]} />}>
                  <Route path="writer" element={<Writer />} />
                </Route>
              </Route>
          
          {/* Not found */}
          {/* <Route path="*" element={<Navigate tos="/login" />} /> */}
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
