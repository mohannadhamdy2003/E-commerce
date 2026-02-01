import { USER } from "@/Api/Api";
import api from "@/Api/axios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

const UpdateUser = () => {
  const navigate=useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    role:"",
    
  });
  
  // Get user by ID
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
  // Update action
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
        role:data.role,
      });
    }
    
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault()
    UpdateMutation.mutate()
  }
  function handleChange(e) {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  if(isLoading) return;
  if(isError) navigate("/page/404");
  return (
    <div className="flex items-center justify-center p-0   ">
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
          <div>
            <Label htmlFor="role">Role</Label>
            
            <NativeSelect onChange={handleChange} name="role" value={form.role}>
              <NativeSelectOption disabled value="" >Select Role</NativeSelectOption>
              <NativeSelectOption  value={"1995"}>Admin</NativeSelectOption>
              <NativeSelectOption  value={"2001"}>User</NativeSelectOption>
              <NativeSelectOption  value={"1996"}>Writer</NativeSelectOption>
            </NativeSelect>
          </div>
          
          <Button
            type="submit"
            className="w-full mt-2 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update User"}
          </Button>
          {/* {isError && <p className="text-red-500">{"Registration failed"}</p>} */}
        </form>
      </Card>
    </div>
  );
};

export default UpdateUser;
