import Image from "../../images/bicycle1.webp";
import { Progress } from "@/components/ui/progress";
const BestTrailBike = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-20">
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="md:w-2/3">
        <p className="font-inter text-xs md:text-sm opacity-80">
          BEST TRAIL BIKE
        </p>
        <h1 className="font-outfit text-xl md:text-2xl lg:text-5xl font-semibold">
          TRAIL VIGILLON ALLEZ TX-86 MOUNTAIN BIKE
        </h1>
        <div className="flex flex-col gap-5 md:gap-10 py-6 md:py-10">
          <div className="flex flex-col gap-3">
            <h1 className="font-outfit text-base md:text-lg lg:text-xl font-semibold opacity-90">
              Tuneups & Builds
            </h1>
            <Progress value={80} className="w-[90%] h-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-outfit text-base md:text-lg lg:text-xl font-semibold opacity-90">
              Adjust & Install
            </h1>
            <Progress value={96} className="w-[90%] h-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-outfit text-base md:text-lg lg:text-xl font-semibold opacity-90">
              Personal Bike Fit
            </h1>
            <Progress value={90} className="w-[90%] h-1" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-outfit text-base md:text-lg lg:text-2xl font-semibold">
              Shifters
            </h1>
            <p className="font-inter text-xs md:text-base opacity-90">
              TRX S6000 10 Speed
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-outfit text-base md:text-lg lg:text-2xl font-semibold">
              F/R Brakes
            </h1>
            <p className="font-inter text-xs md:text-base opacity-90">
              MTR200 Hydraulic Brake
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-outfit text-base md:text-lg lg:text-2xl font-semibold">
              Rear Shock
            </h1>
            <p className="font-inter text-xs md:text-base opacity-90">
              Raiden TR Air, 184 x 44mm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTrailBike;
