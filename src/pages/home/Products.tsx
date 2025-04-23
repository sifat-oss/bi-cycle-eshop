import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllBicyclesQuery } from "@/redux/features/bicycleManagement/bicycle";
import { TBicycleData } from "@/types";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, isLoading } = useGetAllBicyclesQuery(undefined);
  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 md:h-10 w-[250px] md:w-[500px]" />
          <Skeleton className="h-4 md:h-10 w-[250px] md:w-[500px]" />
        </div>
      </div>
    );
  }
  const getRandomItems = (bicycles: TBicycleData[], count: number) => {
    const shuffled = [...bicycles];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled.slice(0, count);
  };

  const randomBicycles = getRandomItems(data?.data || [], 8);
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2 md:gap-5">
        <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl uppercase font-semibold">
          Featured Products
        </h1>
        <p className="text-center text-xs md:text-base opacity-80 w-full md:w-2/3">
          You can ride to improve your fitness, you can ride further and carry
          more gear, you can leave the car at home and help save the
          environment.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
        {randomBicycles.map((bicycle) => (
          <ProductCard key={bicycle._id} bicycle={bicycle} />
        ))}
      </div>
      <Button variant={"outline"} className="text-white text-lg">
        <Link to="/all-bicycles">More Products</Link>
      </Button>
    </div>
  );
};

export default Products;
