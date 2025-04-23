import Banner from "./Banner";
import Products from "./Products";
import CustomerReview from "@/pages/home/CustomerReview";
import BestTrailBike from "./BestTrailBike";
import UpcomingShopCategory from "./UpcomingShopCategory";
import UpcomingService from "./UpcomingService";
import DiscountCycle from "./DiscountCycle";
import News from "./News";
const Home = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-28 items-center justify-center my-5 md:pt-2 pb-5 md:pb-10 px-5 md:px-10 lg:px-20">
      <Banner />
      <Products />
      <BestTrailBike />
      <UpcomingShopCategory />
      <DiscountCycle />
      <UpcomingService />
      <CustomerReview />
      <News />
    </div>
  );
};

export default Home;
