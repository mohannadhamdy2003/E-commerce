import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 ">
      <h1 className="text-6xl font-bold text-red-700">404</h1>
      <p className="text-3xl font-bold text-center text-red-700">
        Page not found
      </p>

      <p className="mt-2 text-gray-500 max-w-md text-2xl text-red-500 text-center">
        The page you’re trying to access doesn’t exist or was moved.
      </p>

      <div className="mt-6 flex gap-4">
        <Link to="/">
          <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer px-5 py-2 rounded-md  text-white hover:opacity-90 transition">
            Go Home
          </Button>
        </Link>

        <Link
          to="/login"
        >
          <Button className="bg-blue-500 hover:bg-blue-400 cursor-pointer px-5 py-2 rounded-md  text-white hover:opacity-90 transition">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
