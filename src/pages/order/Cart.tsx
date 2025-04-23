import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks/hooks";
import {
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { SheetClose } from "@/components/ui/sheet";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cart);
  const { items, totalQuantity, totalPrice } = cartData;

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length > 0 ? (
          <ul className="space-y-4">
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
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.bicycle,
                            quantity: Math.min(item.quantity + 1, item.stock),
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

        <Separator className="my-3" />

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Total Quantity:
          </span>
          <span className="text-lg font-bold">{totalQuantity}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Total Price:
          </span>
          <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
        </div>

        {items.length > 0 && (
          <Link to={`/checkout`}>
            <SheetClose>
              <Button className="w-full mt-4 text-white">
                Proceed to Checkout
              </Button>
            </SheetClose>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default Cart;
