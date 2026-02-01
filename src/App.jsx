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
import Home from "./Pages/Website/Home";
import NotFound from "./Pages/Auth/NotFound";
import RequireBack from "./Pages/Auth/RequireBack";
import Category from "./Pages/Dashboard/Category";
import Product from "./Pages/Dashboard/Product";
import AddCategory from "./Pages/Dashboard/AddCategory";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route element={<RequireBack/>}>
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/register" element={<Register />} />{" "}
        </Route>
        <Route path="/auth/google/callback" element={<GoogleCallBack />} />
        <Route path="/*" element={<NotFound />} />
        {/* Protected Rouutes */}
        <Route element={<RequireAuth AllowedRole={["1995", "1996","1999"]} />}>
          <Route path="/adminlayout" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route element={<RequireAuth AllowedRole={["1995"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/addUser" element={<AddUser />} />
              <Route path="users/:id" element={<UpdateUser />} />
            </Route>

            <Route element={<RequireAuth AllowedRole={["1995", "1996"]} />}>
              <Route path="writer" element={<Writer />} />
            </Route>
            <Route element={<RequireAuth AllowedRole={["1995", "1999"]} />}>
              <Route path="categories" element={<Category />} />
              <Route path="categories/addCategory" element={<AddCategory />} />
              <Route path="product" element={<Product />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
