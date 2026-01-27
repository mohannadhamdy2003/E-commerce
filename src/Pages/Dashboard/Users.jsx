import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import api from "@/Api/axios";
import { baseURL, GETUSERS } from "@/Api/Api";
import { Link } from "react-router-dom";

const Users = () => {
  const getUsers = async () => {
    const { data } = await api.get(`${baseURL}${GETUSERS}`);
    return data;
  };

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        Loading users...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-40 text-red-500">
        Failed to load users
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        No users found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[80px] text-center">#</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right pr-6">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={user.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell className="text-center font-medium">
                {index + 1}
              </TableCell>

              <TableCell className="font-medium text-slate-800">
                {user.name}
              </TableCell>

              <TableCell className="text-slate-600">{user.email}</TableCell>

              <TableCell className="text-right pr-6">
                <div className="flex items-center justify-end gap-4">
                  <Link
                    to={`${user.id}`}
                    className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                    title="Edit user"
                  >
                    ✏️
                  </Link>

                  <button
                    className="text-red-600 hover:text-red-800 transition cursor-pointer"
                    title="Delete user"
                    // onClick={() => deleteUser(user.id)}
                  >
                    🗑️
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
