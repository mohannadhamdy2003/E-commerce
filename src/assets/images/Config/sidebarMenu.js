import {
  faCartShopping,
  faFolder,
  faPlus,
  faTableColumns,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const SIDEBAR_MENU = [
  {
    label: "Dashboard",
    to: "/adminlayout",
    icon: faTableColumns,
    roles: ["1995", "1996"], // admin + writer
  },
  {
    label: "Users",
    to: "/adminlayout/users",
    icon: faUser,
    roles: ["1995"], // admin only
  },
  {
    label: "Add User",
    to: "/adminlayout/users/addUser",
    icon: faUserPlus,
    roles: ["1995"], // admin only
  },
  {
    label: "Products",
    to: "/adminlayout/product",
    icon: faCartShopping,
    roles: ["1995", "1999"], // admin only
    // customIcon: true,
  },
  {
    label: "Writer",
    to: "/adminlayout/writer",
    icon: faUserPlus,
    roles: ["1995", "1996"], // both
  },
  {
    label: "Categories",
    to: "/adminlayout/categories",
    icon: faFolder,
    roles: ["1995", "1999"], //   admin + product manager
  },
  {
    label: "Add Category",
    to: "/adminlayout/categories/addCategory",
    icon: faPlus,
    roles: ["1995", "1999"], //   admin + product manager
  },
];
