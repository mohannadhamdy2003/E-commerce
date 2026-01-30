import Header from "@/components/Dashboard/Header";
import MobileSidebar from "@/components/Dashboard/MobileSidebar";
// import Sidebar from "@/components/Dashboard/Sidebar";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isOpen,setIsOpen]=useState(false)
  function  handleIsOpen(x){
    setIsOpen(x)
    
  }
 
  return (
    // <div className="min-h-screen flex">
    //   {/* SIDEBAR */}
    //   <Sidebar open={isOpen}  className={`hidden lg:block  `} toggleSideBar={handleIsOpen} />

    //   {/* MAIN AREA */}
    //   <div className="flex-1 flex flex-col">
    //     {/* HEADER */}
    //     <header className="h-16 border-b bg-white flex items-center justify-between w-full px-6">
    //       <FontAwesomeIcon
    //         icon={faBars}
    //         className=" lg:opacity-0 cursor-pointer text-lg  mr-4 "
    //         onClick={() => handleIsOpen((prev) => !prev)}
    //       />
    //       <Header />
    //     </header>

    //     {/* CONTENT */}
    //     <main className={`flex-1 p-4  lg:p-8 bg-gray-50 relative `}>
    //       <Outlet />
    //     </main>
    //   </div>
    // </div>
    <div className="min-h-screen flex">
      {/* DESKTOP SIDEBAR */}
      {/* <Sidebar open={isOpen} className="hidden lg:block" /> */}

      {/* MOBILE SIDEBAR */}
      <MobileSidebar open={isOpen} onClose={() => setIsOpen(false)} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-6">
          {/* MOBILE MENU BUTTON */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="lg:hidden cursor-pointer text-lg"
            onClick={() => setIsOpen(true)}
          />
          

          <Header />
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-4 lg:p-8 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
