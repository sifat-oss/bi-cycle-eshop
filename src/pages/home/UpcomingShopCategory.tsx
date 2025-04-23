import { Button } from "@/components/ui/button";
import { bicycleAccessory } from "@/constants";

const UpcomingShopCategory = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold uppercase">
          Shops by Category
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
        {bicycleAccessory.map((item) => (
          <div key={item.id} className="relative h-48 md:h-96 hover:scale-105 transition-transform duration-500">
            <img src={item.image} alt="Apparel" className="w-full h-[100%]" />
            <div className="flex flex-col items-center justify-center md:justify-end gap-5 absolute bottom-0 w-full hover:bg-black/20 opacity-0 hover:opacity-100 py-5 h-full">
              <h1 className="text-base md:text-lg lg:text-3xl font-bold text-center md:text-right font-outfit">
                {item.name}
              </h1>
              <Button className="text-white text-xs md:text-sm rounded-sm hover:scale-105 transition-transform duration-500">
                SHOP NOW
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingShopCategory;
