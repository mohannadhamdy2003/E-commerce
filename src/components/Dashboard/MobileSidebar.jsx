import { Link, useLocation } from "react-router-dom";
// import MobileItem from "./MobileItem";
import logo from "@/assets/images/logo.jpg";
import {
  faTableColumns,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MobileSidebar({ open, onClose }) {
  const { pathname } = useLocation();
  return (
    <>
      {/* BACKDROP */}
      <div
        className={`
            fixed inset-0 bg-black/40 z-40 transition-opacity
            ${open ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        onClick={onClose}
      />

      {/* SIDEBAR */}
      <aside
        className={`
            fixed top-0 left-0 h-screen w-64 bg-white z-50
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        {/* HEADER */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <img src={logo} alt="logo" className="h-8 select-none" />

          <button
            onClick={onClose}
            className="text-xl font-bold cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* MENU */}
        <ul className="mt-6 space-y-1">
          {/* Dashboard */}
          <li>
            <Link
              to="/adminlayout"
              className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all ${pathname === "/adminlayout" ? "text-blue-500 border-b-red-500" : ""}`}
            >
              <FontAwesomeIcon icon={faTableColumns} />
              <span
                className={`ml-3 whitespace-nowrap transition-all duration-300 ${
                  open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                Dashboard
              </span>
            </Link>
          </li>

          {/* Users */}
          <li>
            <Link
              to="/adminlayout/users"
              className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all ${pathname === "/adminlayout/users" ? "text-blue-500 border-b-red-500" : ""}`}
            >
              
              <FontAwesomeIcon icon={faUser} />
              <span
                className={`ml-3 whitespace-nowrap transition-all duration-300 ${
                  open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                Users
              </span>
            </Link>
          </li>

          {/* Add User */}
          <li>
            <Link
              to="/adminlayout/users/addUser"
              className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all ${pathname === "/adminlayout/users/addUser" ? "text-blue-500 border-b-red-500" : ""}`}
            >
              <FontAwesomeIcon icon={faUserPlus} />

              <span
                className={`ml-3 whitespace-nowrap transition-all duration-300 ${
                  open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                Add User
              </span>
            </Link>
          </li>
          {/* Writer */}
          <li>
            <Link
              to="/adminlayout/Writer"
              className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all ${pathname === "/adminlayout/Writer" ? "text-blue-500 border-b-red-500" : ""}`}
            >
              <FontAwesomeIcon icon={faUserPlus} />

              <span
                className={`ml-3 whitespace-nowrap transition-all duration-300 ${
                  open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                Writer
              </span>
            </Link>
          </li>
          {/* Products */}
          <li>
            <Link
              to="/adminlayout/products"
              className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all ${pathname === "/adminlayout/products" ? "text-blue-500 border-b-red-500" : ""}`}
            >
              <svg
                className="w-[18px] h-[18px] flex-shrink-0 text-slate-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l10 5v10l-10 5-10-5V7l10-5z" />
              </svg>

              <span
                className={`ml-3 whitespace-nowrap transition-all duration-300 ${
                  open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                }`}
              >
                Products
              </span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
