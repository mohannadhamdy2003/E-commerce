import { baseURL, REGISTER } from "@/Api/Api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [rpass, setRpass] = useState("");
  
  async function register(){
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("banana");
        resolve();
      }, 3000);
    });
      
    let res = await axios.post(`${baseURL}${REGISTER}`, form);
    if (res.status >= 200 && res.status <= 400) {
      console.log("success");
      setForm({
        name: "",
        email: "",
        password: "",
      });
      setRpass("");
    }
  }
  const registerMutation = useMutation({
    mutationFn: register,
  });
  async function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== rpass) return;
    try {
        registerMutation.mutate()
        
    
    } catch (err) {
      console.log(err);
    }
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
              placeholder="Name"
              value={form.name}
              onChange={(e) => {
                setForm((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              placeholder="example@mail.com"
              onChange={(e) => {
                setForm((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              placeholder="******"
              onChange={(e) => {
                setForm((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
                });
              }}
            />
            <Label htmlFor="Cpassword">Confirm Password</Label>
            <Input
              id="Cpassword"
              value={rpass}
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
          <Button type="submit" className="w-full mt-2 cursor-pointer">
            Register
          </Button>
          
          {registerMutation.isLoading && <Spinner />}
          {registerMutation.isError && (
            <p className="text-red-500">Registration failed</p>
          )}
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a className="text-blue-500" href="/login">
            Login
          </a>
        </p>
      </Card>
    </div>
  );
};

export default Register;
