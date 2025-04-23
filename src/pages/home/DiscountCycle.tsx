import { useOfferedTimeLeft } from "@/utils/offeredTimeLeft";

import Img1 from "../../images/white-bicycle.png";
import DiscountImg1 from "../../images/bg-cycle2.jpg";
import DiscountImg2 from "../../images/bg-cycle3.jpg";
import DiscountImg3 from "../../images/bg-cycle5.jpg";

const discountImages = [DiscountImg1, DiscountImg2, DiscountImg3];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Square } from "lucide-react";

const DiscountCycle = () => {
  const timeLeft = useOfferedTimeLeft("2025-02-15T23:59:59");
  return (
    <div className="flex flex-col w-full" style={{ width: "100%" }}>
      <h2 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold uppercase mb-5 md:mb-10 text-center">
        Biggest Offer
      </h2>
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-between gap-5 w-full bg-black/30">
          <div
            className="bg-white p-5 md:p-10 md:absolute right-24 top-0 h-full flex flex-col items-start justify-around gap-5 md:gap-10"
            style={{ backgroundColor: "#10121a" }}
          >
            <div>
              <p className="">See all our promotions</p>
              <h1 className="font-outfit">
                <span className="text-2xl md:text-4xl opacity-80">SALE UP</span>{" "}
                <span className="text-3xl md:text-5xl opacity-100 ml-2">
                  40%
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Square className="text-white w-3" />
                <p className="font-inter opacity-90">
                  With full custom accessories
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Square className="text-white w-3" />
                <p className="font-inter opacity-90">
                  Power booster gamming GPS support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Square className="text-white w-3" />
                <p className="font-inter opacity-90">
                  Tube less tyre for batter riding
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Square className="text-white w-3" />
                <p className="font-inter opacity-90">
                  Capable strong tire & metal body
                </p>
              </div>
            </div>
            <Button className="animate-bounce text-white md:text-lg">
              Shop Now
            </Button>
          </div>
          <Carousel
            className="w-full max-w-3xl md:ml-10 pb-5"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {discountImages.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <div className="flex justify-center items-center">
                      <img
                        className="w-full h-full rounded-sm"
                        src={item}
                        alt={`discount-cycle-${index + 1}`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        <div className="bg-gradient-to-r from-bright-royal-blue from-0% to-electric-violet to-100% pb-2 md:py-5 px-2 md:px-10 flex flex-col md:flex-row justify-start items-center md:gap-16 lg:gap-28 rounded-md">
          <div className="flex gap-5 items-center">
            <img src={Img1} alt="" className="w-20" />
            <div>
              <h1 className="text-lg md:text-xl font-outfit font-semibold">
                🔥 BIGGEST OFFER!
              </h1>
              <h1 className="text-lg md:text-xl font-outfit font-semibold">
                —Hurry, limited time! ⏳
              </h1>
            </div>
          </div>
          <h1 className="font-outfit text-2xl lg:text-4.5xl font-bold">
            {timeLeft}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DiscountCycle;
