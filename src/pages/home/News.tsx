import { Button } from "@/components/ui/button";
import { NewsData } from "@/constants";

const News = () => {
  return (
    <div className="flex flex-col items-center gap-5 md:gap-10">
      <h2 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold uppercase">
        Latest News
      </h2>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col w-full lg:w-[65%] bg-gray-900 shadow-md rounded-lg">
          <img
            src={NewsData[0].image}
            alt="Featured News"
            className="w-full object-cover rounded-t-lg"
          />
          <div className="flex flex-col justify-between h-full items-start gap-10 p-5">
            <div className="flex flex-col gap-5">
              <h3 className="font-outfit text-xl md:text-2xl lg:text-3xl font-bold">
                {NewsData[0].title}
              </h3>
              <p className="font-inter text-sm text-white/60">
                {NewsData[0].time}
              </p>
              <p className="font-inter text-sm md:text-base">
                {NewsData[0].description}
              </p>
            </div>
            <Button
              variant="outline"
              className="border-gray-400 text-gray-300 hover:bg-gray-700"
            >
              Read More
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[30%] gap-5">
          {[NewsData[1], NewsData[2]].map((news, index) => (
            <div key={index} className="bg-gray-900 shadow-md rounded-lg">
              <img
                src={news.image}
                alt={`News ${index + 1}`}
                className="w-full h-[180px] md:h-[200px] object-cover rounded-t-lg"
              />
              <div className="p-5 flex flex-col gap-3">
                <h3 className="font-outfit text-lg md:text-xl font-bold">
                  {news.title}
                </h3>
                <p className="font-inter text-sm text-white/60">{news.time}</p>
                <p className="font-inter text-sm md:text-base">
                  {news.description}
                </p>
                <Button
                  variant="outline"
                  className="border-gray-400 text-gray-300 hover:bg-gray-700"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        className="border-gray-400 text-gray-300 hover:text-white md:text-lg transition-transform duration-500 hover:scale-105"
      >
        More News
      </Button>
    </div>
  );
};

export default News;
