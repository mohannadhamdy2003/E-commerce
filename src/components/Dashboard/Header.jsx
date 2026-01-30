import Logout from "@/Pages/Auth/Logout";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData(["user"]); 
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-end w-full">
      {/* NOT LOGGED IN */}
      {!currentUser && (
        <div className="flex space-x-4">
          <Link
            className="px-4 py-2 text-sm rounded-full font-medium tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all"
            to="/login"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 text-sm rounded-full font-medium tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all"
          >
            Sign up
          </Link>
        </div>
      )}

      {/* LOGGED IN */}
      {currentUser && (
        <div className="relative">
          {/* Trigger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            <span className="text-sm font-semibold">{currentUser.name}</span>

            <svg
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold">{currentUser.name}</p>
                <p className="text-xs text-gray-500">{currentUser.email}</p>
              </div>

              <div className="p-2">
                <Logout />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
