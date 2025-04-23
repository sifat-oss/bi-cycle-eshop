import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bicycles } from "@/constants";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg"
      >
        {bicycles.map((bike) => (
          <SwiperSlide key={bike.id} className="relative">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full object-cover rounded-lg"
              style={{ height: "450px" }}
            />
            <div className="flex flex-col items-center md:items-end justify-center md:justify-end gap-5 absolute top-10 md:top-16 lg:top-20 right-5 md:right-5 lg:right-5 w-4/5 md:w-2/3 lg:w-2/5 text-white p-4 rounded-lg">
              <h1 className="text-lg md:text-2xl lg:text-5xl font-bold text-center md:text-right font-outfit">
                {bike.name}
              </h1>
              <p className="text-sm md:text-base text-center md:text-right font-inter opacity-80">
                {bike.description}
              </p>
              <Button className="text-white text-sm md:text-xl p-3 md:p-5 mt-3 md:mt-10">
                Learn More
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
