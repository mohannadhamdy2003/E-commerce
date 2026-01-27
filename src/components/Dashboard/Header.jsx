import Logout from "@/Pages/Auth/Logout";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      

        <div className="flex max-lg:ml-auto space-x-4 ">
          
          <Link
            className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all "
            to="/login"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all"
          >
            Sign up
          </Link>
          <Logout />
        </div>
      </div>
      // {/* </header> */}
    // </div>
  );
};

export default Header;
