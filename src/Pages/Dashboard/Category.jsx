import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
 
  useMutation,
  useQuery,
  
} from "@tanstack/react-query";
import api from "@/Api/axios";
import { baseURL, CATEGORIES, GETUSERS, USER } from "@/Api/Api";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Category = () => {


  // Get users
  const getCat = async () => {
    const { data } = await api.get(`${CATEGORIES}`);
    return data;
  };
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCat,
    retry:false,
  });
  // delete users
  const deleteCatMutation = useMutation({
    mutationFn: (id) => api.delete(`${CATEGORIES}/${id}`),

    onSuccess: () => {
      
      
    },

    onError: (error) => {
      console.error("Delete Categories failed", error);
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        Loading Categories...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-40 text-red-500">
        Failed to load Categories
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        No users found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden relative">
      <div>
        <Link to="addUser">
          <Button>Add Category</Button>
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
          {categories.map((cat, index) => (
            <TableRow
              key={cat.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell className="text-center font-medium">
                {index + 1}
              </TableCell>

              <TableCell className="font-medium text-slate-800 ">
                {cat.name + "  "}
              </TableCell>

              <TableCell className="text-slate-600">{cat.email}</TableCell>
              <TableCell className="text-right pr-6">
                <div className="flex items-center justify-end gap-4">
                  <Link
                    to={`${cat.id}`}
                    className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                    title="Edit user"
                  >
                    ✏️
                  </Link>

                  <button
                    className={`text-red-600 hover:text-red-800 transition  `}
                    title="Delete user"
                    onClick={() => deleteCatMutation.mutate(cat.id)}
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

export default Category;
