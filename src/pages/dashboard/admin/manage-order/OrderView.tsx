import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetOrdersQuery } from "@/redux/features/order/order";
import { useGetUserByEmailQuery } from "@/redux/features/userManagement/users";
import { useAppSelector } from "@/redux/hooks/hooks";
import { OrderShow } from "@/types";

type OrderItem = {
  orderId: string;
  transactionId: string;
  paymentMethod: string;
  bankStatus: string;
  totalPrice: number;
  status: string;
  createdAt: string;
};

const OrderView = () => {
  const { data: orderData } = useGetOrdersQuery(undefined);
  const user = useAppSelector(selectCurrentUser);
  const { data: userData } = useGetUserByEmailQuery(user?.email);

  const data: OrderItem[] = orderData?.data
    ?.filter((item: OrderShow) => item.user === userData?.data?._id)
    ?.map(({ _id, transaction, totalPrice, status, createdAt }: OrderShow) => ({
      orderId: _id,
      transactionId: transaction.id,
      paymentMethod: transaction.method,
      bankStatus: transaction.bank_status,
      totalPrice,
      status,
      createdAt,
    }));

  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-3xl text-midnight-eclipse font-bold text-center pb-5">
        View Orders
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderView;
