import { USER } from "@/Api/Api";
import api from "@/Api/axios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Spinner } from "@/components/ui/spinner";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation} from "@tanstack/react-query";
import axios from "axios";
import React, {  useState } from "react";
import {  useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role:""
  });
  const [rpass, setRpass] = useState("");
  const [error, setError] = useState("");

  async function register() {
    let res = await api.post(`${USER}/add`, form);
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
        role:"",
      });
      setRpass("");
      navigate("/adminLayout/users");
    },
    onError: (err) => {
      console.log(err);
      setError(err.response.data.message);
    //   console.log(error);
    },
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
    <div className="min-h-screen flex items-center justify-center mt-[-60px]   ">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Add User</h1>
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
          <div>
            <Label htmlFor="role">Role</Label>
            <NativeSelect onChange={handleChange} name="role" value={form.role}>
              <NativeSelectOption disabled value="">
                Select Role
              </NativeSelectOption>
              <NativeSelectOption value={"1995"}>Admin</NativeSelectOption>
              <NativeSelectOption value={"2001"}>User</NativeSelectOption>
              <NativeSelectOption value={"1996"}>Writer</NativeSelectOption>
              <NativeSelectOption value={"1999"}>Product manager</NativeSelectOption>
            </NativeSelect>
          </div>
          <Button
            type="submit"
            className="w-full mt-2 cursor-pointer"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? "Adding..." : "Add User"}
          </Button>
          {registerMutation.isError && (
            <p className="text-red-500">{error || "Adding User Failed"}</p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
