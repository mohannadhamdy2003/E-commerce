import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarItem({
  to,
  icon,
  label,
  open,
  active,
  customIcon,
}) {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-all ${
          active ? "text-blue-500 border-b-red-500" : ""
        }`}
      >
        {icon && <FontAwesomeIcon icon={icon} />}
        {customIcon && (
          <svg
            className="w-[18px] h-[18px] flex-shrink-0 text-slate-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l10 5v10l-10 5-10-5V7l10-5z" />
          </svg>
        )}

        <span
          className={`ml-3 whitespace-nowrap transition-all duration-300 ${
            open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
