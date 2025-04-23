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
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from "@/redux/features/order/order";
import { OrderShow } from "@/types";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type OrderItem = {
  orderId: string;
  transactionId: string;
  paymentMethod: string;
  bankStatus: string;
  totalPrice: number;
  status: string;
  createdAt: string;
};

const Orders = () => {
  const { data: orderData } = useGetOrdersQuery(undefined);
  const [deleteOrder] = useDeleteOrderMutation();
  const data: OrderItem[] = orderData?.data?.map(
    ({ _id, transaction, totalPrice, status, createdAt }: OrderShow) => ({
      orderId: _id,
      transactionId: transaction.id,
      paymentMethod: transaction.method,
      bankStatus: transaction.bank_status,
      totalPrice,
      status,
      createdAt,
    })
  );

  const handleDelete = async (userId: string) => {
    try {
        await deleteOrder(userId).unwrap();
        toast.success("User deleted successfully");
      } catch (error) {
        toast.error("Failed to delete user");
      }
    };

  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-3xl text-midnight-eclipse font-bold text-center pb-5">
        Orders
      </h1>
      <Table className="w-full min-w-[600px]">
        <TableHeader className=" bg-midnight-eclipse">
          <TableRow>
            <TableHead className="p-3 text-left text-md text-white border">
              Order ID
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Transaction ID
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Payment Method
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Bank Status
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Total Price
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Status
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Created At
            </TableHead>
            <TableHead className="p-3 text-left text-md text-white border">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: OrderItem, index: number) => (
            <TableRow
              key={item.orderId}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200 transition`}
            >
              <TableCell className="border px-4 py-2">{item.orderId}</TableCell>
              <TableCell className="border px-4 py-2">
                {item.transactionId}
              </TableCell>
              <TableCell className="border px-4 py-2">
                {item.paymentMethod}
              </TableCell>
              <TableCell
                className={`border px-4 py-2 font-bold ${
                  item.bankStatus === "Success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.bankStatus}
              </TableCell>
              <TableCell className="border px-4 py-2 text-blue-600 font-semibold">
                ${item.totalPrice.toFixed(2)}
              </TableCell>
              <TableCell
                className={`border px-4 py-2 font-semibold ${
                  item.status === "Paid" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.status}
              </TableCell>
              <TableCell className="border px-4 py-2">
                {new Date(item.createdAt).toLocaleString()}
              </TableCell>
              <TableCell className="border px-4 py-2">
                <div className="flex gap-2">
                  <Link to={`/bicycle-details/${item.orderId}`}>
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
                    onClick={() => handleDelete(item.orderId)}
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

export default Orders;
