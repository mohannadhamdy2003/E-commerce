// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "@/assets/images/logo.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = ({  className, open }) => {
//   const { pathname } = useLocation();
//   // const[flag,setFlag]=useState()
//   return (
//     <div className={className}>
      
//       <nav
//         className={`hidden lg:block
//         h-screen ${
//           open ? "opacity-100" : "opacity-0"
//         } bg-white border-r border-gray-200 shadow-md
//       transition-all duration-300 relative
//       ${open ? "w-64" : "w-15"}
//     `}
//       >
//         {/* ===== HEADER ===== */}
//         <div className="h-16 flex items-center justify-between px-4">
//           {/* <img
//             src={logo}
//             alt="logo"
//             className={`h-40 w-auto transition-opacity duration-300 select-none ${
//               open ? "opacity-100" : "opacity-0"
//             }`}
//           /> */}
//         </div>

//         {/* ===== MENU ===== */}
//         {/* <ul className="mt-6 space-y-1">
//           {/* Dashboard */}
//           <li>
//             <Link
//               to="/adminlayout"
//               className="flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all"
//             >
//               <svg
//                 className="w-[18px] h-[18px] flex-shrink-0 text-slate-700"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
//               </svg>

//               <span
//                 className={`ml-3 whitespace-nowrap transition-all duration-300 ${
//                   open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
//                 }`}
//               >
//                 Dashboard
//               </span>
//             </Link>
//           </li>

//           {/* Users */}
//           <li>
//             <Link
//               to="/adminlayout/users"
//               className="flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all"
//             >
//               <svg
//                 className="w-[18px] h-[18px] flex-shrink-0 text-slate-700"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
//               </svg>

//               <span
//                 className={`ml-3 whitespace-nowrap transition-all duration-300 ${
//                   open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
//                 }`}
//               >
//                 Users
//               </span>
//             </Link>
//           </li>

//           {/* Products */}
//           <li>
//             <Link
//               to="/adminlayout/products"
//               className="flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all"
//             >
//               <svg
//                 className="w-[18px] h-[18px] flex-shrink-0 text-slate-700"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2l10 5v10l-10 5-10-5V7l10-5z" />
//               </svg>

//               <span
//                 className={`ml-3 whitespace-nowrap transition-all duration-300 ${
//                   open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
//                 }`}
//               >
//                 Products
//               </span>
//             </Link>
//           </li>
//         {/* </ul> */} 
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
