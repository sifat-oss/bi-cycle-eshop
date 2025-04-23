import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "../../images/bestTrail.png";
import { SquareCheckBigIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { customerReviews, OurServices } from "@/constants";

const About = () => {
  return (
    <div className=" flex flex-col gap-5 md:gap-10 lg:gap-20 text-white min-h-screen pb-5 md:pb-10 px-5 md:px-10 lg:px-20 pt-5 md:pt-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-20">
        <div>
          <img src={Image} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-5 md:gap-10 lg:gap-16">
          <div>
            <p className="font-inter text-xs md:text-sm opacity-80">
              About CycleZen
            </p>
            <h1 className="font-outfit text-xl md:text-2xl lg:text-5xl font-semibold">
              We educate the public about the bicycle riding
            </h1>
            <p className="text-white/80 mt-3 md:mt-6 text-md font-inter">
              CycleZen is a leading provider of top-quality bicycles and
              accessories. We are committed to promoting a healthier lifestyle
              and a cleaner planet by offering eco-friendly and sustainable
              solutions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white font-inter flex gap-2">
              <SquareCheckBigIcon className="w-4" /> Accessories for all types
              of riders.
            </p>
            <p className="text-white font-inter flex gap-2">
              <SquareCheckBigIcon className="w-4" /> Our mission is to promote a
              healthier lifestyle and a greener planet.
            </p>
            <p className="text-white font-inter flex gap-2">
              <SquareCheckBigIcon className="w-4" /> CycleZen offers a wide
              range of bikes, from city commuters models.
            </p>
            <p className="text-white font-inter flex gap-2">
              <SquareCheckBigIcon className="w-4" /> We prioritize customer
              satisfaction by products.
            </p>
            <p className="text-white font-inter flex gap-2">
              <SquareCheckBigIcon className="w-4" /> At CycleZen, we believe
              cycling is more sustainability. 🚴‍♂️
            </p>
          </div>
        </div>
      </div>

      {/* history */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20">
        <Carousel className="w-1/2 pb-5" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem key={1}>
              <Card className="shadow-md bg-gray-800 rounded-lg p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Top-quality bicycles and accessories</li>
                    <li>Eco-friendly and sustainable solutions</li>
                    <li>Expert support and customer service</li>
                    <li>Competitive pricing and great offers</li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem key={2}>
              <Card className="shadow-md bg-gray-800 rounded-lg p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>
                    At CycleZen, we believe in the power of cycling to promote a
                    healthier lifestyle and a cleaner planet. We strive to offer
                    the best products that enhance your riding experience while
                    being eco-friendly.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
        <div className="w-1/2 flex flex-col">
          <div>
            <p className="font-inter text-xs md:text-sm opacity-80">Why We</p>
            <h1 className="font-outfit text-xl md:text-2xl lg:text-5xl font-semibold">
              OUR TARGET
            </h1>
          </div>
          <p className="text-white/80 mt-3 md:mt-6 text-md font-inter">
            CycleZen is committed to making cycling a more enjoyable and
            sustainable experience for all. We strive to create a safe, healthy,
            and enjoyable ride for our customers. We also aim to promote a
            greener planet by offering eco-friendly and sustainable solutions.
            Our team of experts is dedicated to providing top-quality products
            and excellent customer service. We believe that cycling is more than
            just a sport—it's a way of life. 🚴‍♂️
          </p>
        </div>
      </div>

      {/* services */}
      <div className="flex flex-col items-center gap-5 md:gap-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold uppercase">
            Our Bike Services
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {OurServices.map((item) => (
            <Card
              key={item.title}
              className="hover:scale-105 transition-transform duration-300 bg-black"
            >
              <CardHeader className="p-0">
                <img src={item.image} className="rounded-t-lg h-20 md:h-80" />
              </CardHeader>
              <CardContent className="py-2 md:py-8 px-2 md:px-8">
                <CardTitle className="text-sm md:text-2xl lg:text-3xl md:pb-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="mt-2 text-xs md:text-sm">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="text-xs md:text-sm border-none"
                >
                  READ MORE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button
          variant="outline"
          className="border-gray-400 text-gray-300 hover:text-white md:text-lg transition-transform duration-500 hover:scale-105"
        >
          More Services
        </Button>
      </div>

      <div className=" flex flex-col gap-10 items-center">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold uppercase">
            Meet our expert Team
          </h2>
          <p className="text-gray-400 w-sm text-center mt-5">
            Read why thousands of marketers, writers, and entrepreneurs love us
            so much.
          </p>
        </div>
        {/* Carousel Section */}
        <div className="">
          <Carousel
            opts={{ loop: true }}
            className="max-w-[260px] md:max-w-7xl"
          >
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
                        <p className="text-gray-300 text-xs md:text-base">
                          {review.comment}
                        </p>

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
      </div>
    </div>
  );
};

export default About;
