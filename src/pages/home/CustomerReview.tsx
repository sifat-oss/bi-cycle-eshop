import { customerReviews } from "@/constants";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const CustomerReview = () => {
  return (
    <div className=" flex flex-col gap-10 items-center">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold uppercase">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 w-sm text-center mt-5">
          Read why thousands of marketers, writers, and entrepreneurs love us so
          much.
        </p>
      </div>
      {/* Carousel Section */}
      <div className="">
        <Carousel opts={{ loop: true }} className="max-w-[260px] md:max-w-7xl">
          <CarouselContent className="-ml-1">
            {customerReviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-3">
                  <Card className="bg-gray-800 rounded-lg shadow-lg">
                    <CardContent className="flex flex-col gap-3 md:gap-5 p-3 md:p-6">
                      {/* Customer Info */}
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={
                              review.avatar || "https://github.com/shadcn.png"
                            }
                            alt={review.name}
                          />
                        </Avatar>
                        <div>
                          <h3 className="md:text-lg font-semibold">
                            {review.name}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-400">
                            {review.email}
                          </p>
                        </div>
                      </div>

                      {/* Review Content */}
                      <p className="text-gray-300 text-xs md:text-base">{review.comment}</p>

                      {/* Read More Button */}
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Button
        variant="outline"
        className="border-gray-400 text-gray-300 hover:text-white md:text-lg transition-transform duration-500 hover:scale-105"
      >
        More Review
      </Button>
    </div>
  );
};

export default CustomerReview;
