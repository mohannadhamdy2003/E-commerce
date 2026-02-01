import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.jpg";
import {  useQueryClient } from "@tanstack/react-query";
import { SIDEBAR_MENU } from "@/assets/images/Config/sidebarMenu";
import SidebarItem from "./SidebarItem";



export default function MobileSidebar({ open, onClose }) {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData(["user"]); 
  const role = currentUser?.role;

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
          {SIDEBAR_MENU.filter((item) => item.roles.includes(role)).map(
            (item) => (
              <SidebarItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                open={open}
                active={pathname === item.to}
                customIcon={item.customIcon}
              />
            ),
          )}
        </ul>
      </aside>
    </>
  );
}
