import { baseURL, REGISTER } from "@/Api/Api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [rpass, setRpass] = useState("");

  async function register() {
    let res = await axios.post(`${baseURL}${REGISTER}`, form);
    if (res.status >= 200 && res.status < 300) {
      console.log("success");
    }
  }
  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      setForm({
        name: "",
        email: "",
        password: "",
      });
      setRpass("");
      navigate("/login")
    },
    onError:(err)=>{
      console.log(err)
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== rpass) return;
    registerMutation.mutate();
  }
  function handleChange(e) {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100   ">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              //   className="focus::border border-blue-300"
              type="text"
              required
              minLength="3"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
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
              required
              minLength="8"
              value={form.password}
              placeholder="******"
              onChange={handleChange}
            />
            <Label htmlFor="Cpassword">Confirm Password</Label>
            <Input
              id="Cpassword"
              value={rpass}
              required
              minLength="8"
              onChange={(e) => {
                setRpass(e.target.value);
              }}
              type="password"
              placeholder="******"
            />
            {form.password !== rpass && (
              <p className="text-2 text-red-500">not matched passwords</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full mt-2 cursor-pointer"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? "Registering..." : "Register"}
          </Button>
          {registerMutation.isError && (
            <p className="text-red-500">Registration failed</p>
          )}
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
