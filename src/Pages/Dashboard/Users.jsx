import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import api from "@/Api/axios";
import { baseURL, GETUSERS, USER } from "@/Api/Api";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Users = () => {
  const queryClient = useQueryClient();
  // Get user from cache
  const currentUser = queryClient.getQueryData(["user"]);

  // Get users
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
  // delete users
  const deleteUserMutation = useMutation({
    mutationFn: (id) => api.delete(`${USER}/${id}`),

    onSuccess: () => {
      // Refresh users list
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (error) => {
      console.error("Delete failed", error);
    },
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
    <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden relative">
      <div>
        <Link to="addUser" >
          <Button>Add User</Button>
        </Link>
      </div>
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[80px] text-center">#</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
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

              <TableCell className="font-medium text-slate-800 ">
                {user.name + "  "}
                {currentUser.email === user.email ? (
                  <span className="text-red-500 font-bold text-[15px] inline-block">
                    (You)
                  </span>
                ) : (
                  ""
                )}
              </TableCell>

              <TableCell className="text-slate-600">{user.email}</TableCell>
              <TableCell className="text-slate-600">
                {user.role == "1995"
                  ? "Admin"
                  : user.role == "2001"
                    ? "User"
                    : "Writer"}
              </TableCell>

              <TableCell className="text-right pr-6">
                <div className="flex items-center justify-end gap-4">
                  {currentUser.email === user.email ? (
                    <>
                      <p className="text-red-500 font-bold text-[15px]">You</p>
                    </>
                  ) : (
                    ""
                  )}
                  <Link
                    to={`${user.id}`}
                    className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                    title="Edit user"
                  >
                    ✏️
                  </Link>

                  <button
                    className={`text-red-600 hover:text-red-800 transition  ${currentUser.email === user.email ? "opacity-40  cursor-default" : "cursor-pointer"}`}
                    title="Delete user"
                    onClick={() => deleteUserMutation.mutate(user.id)}
                    disabled={currentUser.email === user.email}
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
