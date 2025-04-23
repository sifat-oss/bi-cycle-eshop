/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/features/userManagement/users";

const Users = () => {
  const { data: userData } = useGetAllUserQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  const data = userData?.data?.map(({ _id, name, email, role, isBlocked }) => ({
    userId: _id,
    name,
    email,
    role,
    isBlocked,
  }));

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId).unwrap();
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-3xl text-midnight-eclipse font-bold text-center pb-5">
        Users
      </h1>
      <Table className="w-full min-w-[600px]">
        <TableHeader className="bg-midnight-eclipse">
          <TableRow>
            <TableHead className="p-3 text-left text-md text-white border">
              Name
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Email
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Role
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Blocked
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={item.userId}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200 transition`}
            >
              <TableCell className="border px-4 py-2">{item.name}</TableCell>
              <TableCell className="border px-4 py-2">{item.email}</TableCell>
              <TableCell className="border px-4 py-2 font-semibold text-blue-600">
                {item.role}
              </TableCell>
              <TableCell
                className={`border px-4 py-2 font-semibold ${
                  item.isBlocked ? "text-red-500" : "text-green-500"
                }`}
              >
                {item.isBlocked ? "Yes" : "No"}
              </TableCell>
              <TableCell className="border px-4 py-2">
                <div className="flex gap-2">
                  <Link to={`/bicycle-details/${item.userId}`}>
                    <Button
                      variant="outline"
                      className="hover:text-white text-xs"
                    >
                      Detail
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="hover:text-white text-xs"
                  >
                    Update
                  </Button>
                  <Button
                    variant="destructive"
                    className="text-xs"
                    onClick={() => handleDelete(item.userId)}
                  >
                    Delete
                  </Button>
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
