import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./Pages/Website/AdminLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./Pages/Dashboard/Users";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<AdminLayout />} /> */}
          <Route path="/adminlayout" element={<AdminLayout />}>
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
