import { baseURL, LOGIN } from "@/Api/Api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// import logo from "@/assets/images/logo.jpg";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import  Cookie  from "cookie-universal";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const cookie=Cookie()
  const navigate=useNavigate()
  const [error,setError]=useState("")
  const queryClient=useQueryClient()
  
  async function login() {
    let res = await axios.post(`${baseURL}${LOGIN}`, form);
    
    if (res.status >= 200 && res.status < 300) {
      console.log("success");
    }
    return res.data
    
  } 
  // useEffect(() => {
  //   console.log(typeof(currentUser.role));
  // }, [currentUser]);
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { token, user } = data;

      cookie.set("e-commerce", token);

      // ✅ store user globally
      queryClient.setQueryData(["user"], user);

      // ✅ role-based redirect
      if (user.role === "2001") {
        navigate("/");
      } else {
        navigate("/adminlayout");
      }
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
   
    loginMutation.mutate();
  }
  function handleChange(e) {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100   ">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              placeholder="example@mail.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              minLength="8"
              required
              value={form.password}
              placeholder="******"
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-2 cursor-pointer"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? "Logining..." : "Login"}
          </Button>
          {loginMutation.isError && (
            <p className="text-red-500">
              {error || "Email or password is wrong!"}
            </p>
          )}
        </form>
        <a
          href="http://127.0.0.1:8000/login-google"
          className="flex items-center justify-center gap-3 w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Sign in with Google</span>
        </a>

        <p className="text-center text-sm mt-4">
          Dont have an account?{" "}
          <Link className="text-blue-500" to="/register">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};
export default Login;
