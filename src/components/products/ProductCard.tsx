import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { TBicycleData } from "@/types";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";

interface ProductCardProps {
  bicycle: TBicycleData;
}

const ProductCard: FC<ProductCardProps> = ({ bicycle }) => {
  const dispatch = useAppDispatch();
  const {
    _id: bicycleId,
    name,
    model,
    brand,
    frame,
    quantity,
    price,
    type,
    image,
  } = bicycle;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        bicycle: bicycleId,
        name: name,
        price: price,
        quantity: 1,
        stock: quantity,
        imageUrl: image?.front_view,
      })
    );
    toast.success("Bicycle added to cart");
  };

  return (
    <Card className="hover:border-2 hover:border-white hover:scale-105 transition-transform duration-300">
      <div className="p-0">
        <img
          src={image?.front_view}
          className="rounded-t-lg h-28 md:h-48 w-full"
        />
      </div>
      <CardHeader className="p-2 md:p-5">
        <CardDescription className="-mb-2 text-xs md:text-sm">
          {type}
        </CardDescription>
        <CardTitle className="text-sm md:text-xl pb-2">{name}</CardTitle>
        <hr className="border-white opacity-60" />
      </CardHeader>
      <CardContent className="p-2 md:px-5">
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {/* Model */}
          <div className="flex flex-col justify-center items-start">
            <p className="font-inter text-xs opacity-60">Model</p>
            <p className="font-inter text-xs md:text-lg">{model}</p>
          </div>
          {/* Brand */}
          <div className="flex flex-col justify-center items-start ">
            <p className="font-inter text-xs opacity-60">Brand</p>
            <p className="font-inter text-xs md:text-lg">{brand}</p>
          </div>
          {/* Color */}
          <div className="flex flex-col justify-center items-start">
            <p className="font-inter text-xs opacity-60">Color</p>
            <p className="font-inter text-xs md:text-lg">{frame.color}</p>
          </div>
          {/* Material */}
          <div className="flex flex-col justify-center items-start">
            <p className="font-inter text-xs opacity-60">Material</p>
            <p className="font-inter text-xs md:text-lg">{frame.material}</p>
          </div>
          {/* Frame Size */}
          <div className="flex flex-col justify-center items-start">
            <p className="font-inter text-xs opacity-60">Frame Size</p>
            <p className="font-inter text-xs md:text-lg">{frame.size}</p>
          </div>
          {/* Quantity */}
          <div>
            <div className="flex flex-col justify-center items-start">
              <p className="font-inter text-xs opacity-60">Quantity</p>
              <p className="font-inter text-xs md:text-lg">{quantity}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 md:flex-row items-start justify-between md:mt-5">
        <Button variant="outline" className="text-[8px] md:text-sm p-2">
          <Link to={`/bicycle-details/${bicycleId}`}>READ MORE</Link>
        </Button>
        <Button
          className="text-white font-outfit text-[8px] md:text-sm p-2"
          onClick={() => handleAddToCart()}
        >
          <ShoppingCart /> ADD TO CART
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
