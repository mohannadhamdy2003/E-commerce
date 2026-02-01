import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Forbidden = ({link,text}) => {
  return (
    <div className="flex flex-col justify-center gap-5 items-center">
      <div className="text-5xl font-bold text-center text-red-700">
        403 - Access Denied
      </div>
      <div className="text-2xl text-red-500 text-center">
        Opps - You don't have permission to access this page
      </div>
      <Link to={link} className="btn">
        <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer">{text}</Button>
      </Link>
    </div>
  );
};

export default Forbidden;
