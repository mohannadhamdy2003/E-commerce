import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./Pages/Website/AdminLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient= new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AdminLayout />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
