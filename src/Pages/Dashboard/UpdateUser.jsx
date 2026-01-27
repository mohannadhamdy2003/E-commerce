import { USER } from "@/Api/Api";
import api from "@/Api/axios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    
  });
  const navigate=useNavigate()
  
  const {id} = useParams();
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await api.get(`${USER}/${id}`);
      return res.data;
    },
    enabled: !!id,
    retry: false,
  });
  const UpdateMutation = useMutation({
    mutationFn: async()=>{
         await api.post(`${USER}/edit/${id}`, form);
    },
    onSuccess: () => {
        
      navigate("/adminLayout/users");
    },
    onError: (err) => {
      console.log(err);
      
    },
  });


  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        email: data.email,
       
      });
    }
  }, [data]);
//   console.log(form)
  function handleSubmit(e) {
    e.preventDefault()
    UpdateMutation.mutate()
  }
  function handleChange(e) {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100   ">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Update User</h1>
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
          {/* <div>
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
          </div> */}
          <Button
            type="submit"
            className="w-full mt-2 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update User"}
          </Button>
          {isError && <p className="text-red-500">{"Registration failed"}</p>}
        </form>
      </Card>
    </div>
  );
};

export default UpdateUser;
