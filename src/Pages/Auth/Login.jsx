import { baseURL, LOGIN } from "@/Api/Api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import  Cookie  from "cookie-universal";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const cookie=Cookie()

  async function login() {
    let res = await axios.post(`${baseURL}${LOGIN}`, form);
    
    if (res.status >= 200 && res.status < 300) {
      console.log("success");
      const token=res.data.token
      cookie.set("e-commerce",token)
    }
  }
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      setForm({
        
        email: "",
        password: "",
      });
      
    },
    onError: (err) => {
      console.log(err);
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
            <p className="text-red-500">Email or password is wrong!</p>
          )}
        </form>
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
