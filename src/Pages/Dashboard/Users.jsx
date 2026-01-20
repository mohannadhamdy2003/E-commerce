import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { baseURL, GETUSERS } from "@/Api/Api";
import { useQuery } from "@tanstack/react-query";
import api from "@/Api/axios";
import { Link } from "react-router-dom";
const Users = () => {
    const getUsers=async()=>{
        const {data}=await api.get(`${baseURL}${GETUSERS}`)
        return data
    }
    const { data: users, isLoading ,isError} = useQuery({
      queryKey: ["users"],
      queryFn: getUsers,
    });
    // console.log(data)
    
if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error</p>;
  return (
    <Table className=" ">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="">
        <TableRow>
          <TableHead className="text-center">Id</TableHead>
          <TableHead className="text-center">Users</TableHead>
          <TableHead className="text-center">Email</TableHead>
          <TableHead className="text-center">A</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {/* <Link to={`${user.id}`}>
                  <i className="fa-regular fa-pen-to-square text-blue-400 cursor-pointer "></i>
                </Link>
                <i
                  className="fa-solid fa-trash text-red-600 mx-9 cursor-pointer"
                  // onClick={() => deleteUser(user.id)}
                ></i> */}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Users;
