import { Link } from "react-router-dom";

function MobileItem({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="block px-6 py-3 text-slate-700 hover:bg-gray-100"
      >
        {label}
      </Link>
    </li>
  );
}
export default MobileItem