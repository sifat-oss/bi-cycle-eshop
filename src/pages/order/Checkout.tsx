/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAppSelector, useAppDispatch } from "@/redux/hooks/hooks";
import { useCreateOrderMutation } from "@/redux/features/order/order";
import { toast } from "sonner";
import { useEffect } from "react";
import {
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { Trash2 } from "lucide-react";
import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import CZSelect from "@/components/form/CZSelect";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetUserByEmailQuery } from "@/redux/features/userManagement/users";

const paymentOptions = [
  {
    value: "SurjoPay",
    label: "SurjoPay",
  },
  {
    value: "Stripe",
    label: "Stripe",
  },

  {
    value: "PayPal",
    label: "PayPal",
  },
];

const Checkout = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data: userData } = useGetUserByEmailQuery(user?.email);
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cart);
  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();

  const { items, totalPrice } = cartData;

  const handlePlaceOrder = async (data: any) => {
    if (data.paymentMethod !== "SurjoPay") {
      toast.error("This payment method is not supported. Choose only SurjoPay");
      return;
    }
    const orderData = {
      name: data.name || userData?.data?.name,
      email: data.email || userData?.data?.email,
      shippingAddress: data.address || userData?.data?.presentAddress,
      paymentMethod: data.paymentMethod,
      bicycles: cartData.items,
    };
    await createOrder(orderData);
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  return (
    <div className="md:pt-5 pb-5 md:pb-10 px-5 md:px-10 lg:px-20">
      <Card className="">
        <CardHeader>
          <CardTitle className="font-outfit text-center text-4.5xl font-semibold">
            Checkout
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-start justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="font-outfit text-xl">Bicycle Info</h1>
            <div>
              {items.length > 0 ? (
                <ul className="grid grid-cols-2 gap-10 space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.bicycle}
                      className="flex items-center gap-4 border-b pb-3"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-16 w-16 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.bicycle,
                                  quantity: Math.max(item.quantity - 1, 1),
                                })
                              )
                            }
                          >
                            -
                          </Button>
                          <span className="text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.bicycle,
                                  quantity: Math.min(
                                    item.quantity + 1,
                                    item.stock
                                  ),
                                })
                              )
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm font-semibold">
                        ${(item.quantity * item.price).toFixed(2)}
                      </p>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-red-600"
                        onClick={() => dispatch(removeFromCart(item.bicycle))}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </div>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.bicycle} className="flex justify-between">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>${(item.quantity * item.price).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Separator className="my-3" />
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total Price:</span>
              <span className="text-lg font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <CZForm
            onSubmit={handlePlaceOrder}
            buttonName="Place Order"
            submitDisabled={items?.length === 0 && true}
          >
            <h1 className="font-outfit md:text-xl mb-5">Order Info</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <CZInput
                name="name"
                label="Full Name"
                type="text"
                defaultValue={userData?.data?.name}
              />
              <CZInput
                name="email"
                label="Email Address"
                type="email"
                defaultValue={userData?.data?.email}
              />
              <CZInput
                name="address"
                label="Shipping Address"
                type="text"
                defaultValue={userData?.data?.presentAddress}
              />
              <CZSelect
                name="paymentMethod"
                label="Payment Method"
                options={paymentOptions}
              />
            </div>
          </CZForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
