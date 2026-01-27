import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./Pages/Website/AdminLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./Pages/Dashboard/Users";
import GoogleCallBack from "./Pages/Auth/GoogleCallBack";
import RequireAuth from "./Pages/Auth/RequireAuth";
import UpdateUser from "./Pages/Dashboard/UpdateUser";

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
          <Route element={<RequireAuth />}>
            <Route path="/adminlayout" element={<AdminLayout />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UpdateUser />} />
            </Route>
          </Route>
          {/* Not found */}
          {/* <Route path="*" element={<Navigate tos="/login" />} /> */}
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
