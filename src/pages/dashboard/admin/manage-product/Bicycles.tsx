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
import {
  useDeleteBicycleMutation,
  useGetAllBicyclesQuery,
} from "@/redux/features/bicycleManagement/bicycle";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import UpdateBicycle from "./UpdateBicycle";

const Bicycles = () => {
  const { data: bicyclesData } = useGetAllBicyclesQuery(undefined);
  const [deleteBicycle] = useDeleteBicycleMutation();
  const data = bicyclesData?.data?.map(
    (bicycle) => ({
      ...bicycle,
      bicycleId: bicycle._id,
    })
  );

  const handleDelete = async (bicycleId: string) => {
    try {
      await deleteBicycle(bicycleId).unwrap();
      toast.success("Bicycle deleted successfully");
    } catch {
      toast.error("Failed to delete bicycle");
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-3xl text-midnight-eclipse font-bold text-center pb-5">
        Bicycles
      </h1>
      <Table className="w-full min-w-[600px]">
        <TableHeader className="bg-midnight-eclipse">
          <TableRow>
            <TableHead className="p-3 text-left text-md text-white border">
              Name
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Model
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Brand
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Quantity
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Price
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={item.bicycleId}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200 transition`}
            >
              <TableCell className="border px-4 py-2">{item.name}</TableCell>
              <TableCell className="border px-4 py-2">{item.model}</TableCell>
              <TableCell className="border px-4 py-2">{item.brand}</TableCell>
              <TableCell className="border px-4 py-2">
                {item.quantity}
              </TableCell>
              <TableCell className="border px-4 py-2 text-blue-600 font-semibold">
                ${item.price.toFixed(2)}
              </TableCell>
              <TableCell className="border px-4 py-2">
                <div className="flex gap-2">
                  <Link to={`/bicycle-details/${item.bicycleId}`}>
                    <Button
                      variant="outline"
                      className="hover:text-white text-xs"
                    >
                      Detail
                    </Button>
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="hover:text-white text-xs"
                      >
                        Update
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[100%] max-h-[90vh] overflow-y-auto">
                      <UpdateBicycle id={item?.bicycleId} bicycle={item} />
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="destructive"
                    className="text-xs"
                    onClick={() => handleDelete(item.bicycleId)}
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

export default Bicycles;
