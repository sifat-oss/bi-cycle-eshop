import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useGetBicycleQuery } from "@/redux/features/bicycleManagement/bicycle";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";

const BicycleDetails = () => {
  const { bicycleId } = useParams();
  const { data, isLoading } = useGetBicycleQuery(bicycleId!);
  const dispatch = useAppDispatch();
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
  const bicycle = data?.data;

  const {
    _id,
    name,
    brand,
    model,
    description,
    type,
    frame,
    wheel,
    gear,
    brakes,
    suspension,
    handlebar,
    saddle,
    pedals,
    weight,
    price,
    quantity,
    inStock,
    image,
  } = bicycle || {};

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        bicycle: _id || "",
        name: name || "",
        price: price ?? 0,
        quantity: 1,
        stock: quantity ?? 0,
        imageUrl: image?.front_view || "",
      })
    );
    toast.success("Bicycle added to cart");
  };

  return (
    <div className="flex flex-col gap-5 md:gap-10 pt-5 md:pt-10 pb-5 md:pb-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-20">
        <div className="flex flex-col items-center gap-5">
          <div className="pl-6 md:pl-0">
            <Carousel
              opts={{ loop: true }}
              className="max-w-[280px] md:max-w-6xl h-200px md:h-[450px]"
            >
              <CarouselContent className="gap-2">
                <CarouselItem key={_id} className="pl-1">
                  <img
                    src={image?.front_view}
                    alt=""
                    className="h-200px md:h-[450px] w-full"
                  />
                </CarouselItem>
                <CarouselItem key={_id} className="pl-1">
                  <img
                    src={image?.back_view}
                    alt=""
                    className="h-200px md:h-[450px] w-full"
                  />
                </CarouselItem>
                <CarouselItem key={_id} className="pl-1 ">
                  <img
                    src={image?.close_up_gears}
                    alt=""
                    className="h-200px md:h-[450px] w-full"
                  />
                </CarouselItem>
                <CarouselItem key={_id} className="pl-1 ">
                  <img
                    src={image?.rear_view}
                    alt=""
                    className="h-200px md:h-[450px] w-full"
                  />
                </CarouselItem>
                <CarouselItem key={_id} className="pl-1 ">
                  <img
                    src={image?.side_view}
                    alt=""
                    className="h-200px md:h-[450px] w-full"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-10 w-full md:w-2/3">
          <div className="flex flex-col gap-3">
            <h1 className="font-outfit text-xl font-semibold opacity-80">
              {name}
            </h1>
            <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold">
              ${price}
            </h1>
          </div>
          <div className="flex  md:gap-5">
            <h1>Available: {quantity}</h1>
            <h1>Stock: {inStock ? "In Stock" : "Out OF Stock"}</h1>
          </div>
          <div className="flex flex-col gap-2 md:gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="font-outfit text-base md:text-lg font-semibold opacity-90">
                Tuneups & Builds
              </h1>
              <Progress value={80} className="w-[90%] h-1" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-outfit text-base md:text-lg  font-semibold opacity-90">
                Adjust & Install
              </h1>
              <Progress value={96} className="w-[90%] h-1" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-outfit text-base md:text-lg font-semibold opacity-90">
                Personal Bike Fit
              </h1>
              <Progress value={90} className="w-[90%] h-1" />
            </div>
          </div>
          <div>
            <Button
              className="text-white font-outfit md:text-lg"
              onClick={() => handleAddToCart()}
            >
              <ShoppingCart /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <div className="flex flex-col gap-5 md:gap-10">
          <Tabs defaultValue="description" className="">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="review">Review</TabsTrigger>
              <TabsTrigger value="size-guide">Size Guide</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                  <CardDescription>
                    Detailed information about the bicycle's features and
                    specifications. {description} is available in various sizes
                    and colors.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="review">
              <Card>
                <CardHeader>
                  <CardTitle>Review</CardTitle>
                  <CardDescription>
                    Read customer reviews and feedback about this bicycle.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="size-guide">
              <Card>
                <CardHeader>
                  <CardTitle>Size Guide</CardTitle>
                  <CardDescription>
                    Find the perfect size for your comfort and performance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-outfit mb-5">
              Video
            </h1>
            <iframe
              src="https://www.youtube.com/embed/7UmOzPopJNE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px] md:h-[500px] lg:h-[400px]"
            ></iframe>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden ">
          <div className="px-4 py-2 text-2xl font-outfit font-semibold bg-black/40">
            PRODUCT SPECIFICATIONS
          </div>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="md:text-lg">Brand</TableCell>
                <TableCell className="md:text-lg">{brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Model</TableCell>
                <TableCell className="md:text-lg">{model}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Type</TableCell>
                <TableCell className="md:text-lg">{type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium w-1/4 bg-black/40 font-outfit">
                  Frame
                </TableCell>
                <TableCell>
                  Optimized Construction {frame?.material} frame with{" "}
                  {frame?.size} travel.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Color</TableCell>
                <TableCell>{frame?.color}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Wheel</TableCell>
                <TableCell>
                  The {wheel?.rim_material} rim, {wheel?.size}" size, and{" "}
                  {wheel?.tire_type} tires ensure durability and performance.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Gear</TableCell>
                <TableCell>
                  The {gear?.shifters} offers an impressive{" "}
                  {gear?.derailleurs?.front} front and {gear?.derailleurs?.rear}{" "}
                  and {gear?.number_of_gears} gears.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Brakes</TableCell>
                <TableCell>
                  The {brakes?.brand} {brakes?.type} brakes provide superior
                  stopping power.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Suspension</TableCell>
                <TableCell>
                  The {suspension?.type} suspension system ensures a smooth
                  ride.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Handlebar</TableCell>
                <TableCell>
                  {handlebar?.type} handlebar with {handlebar?.material} and{" "}
                  {handlebar?.width} width.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Saddle</TableCell>
                <TableCell>
                  {saddle?.brand} saddle with {saddle?.type}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Pedals</TableCell>
                <TableCell>{pedals?.type} pedals</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="md:text-lg">Weight</TableCell>
                <TableCell>{weight}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BicycleDetails;
