import { Button } from "../ui/button";
import Paragraph from "../ui/paragraph";
import Title from "../ui/title";

const Offer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #171924 0%, rgba(23, 25, 36, 0) 100%)",
      }}
      className="py-20"
    >
      <div style={{ width: "1300px" }} className="mx-auto">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center">
            <Title text="Make the wise decision" fontSize="2xl" />
            <Title text="for your business" fontSize="2xl" />
          </div>
          <Paragraph
            text="Choose from our affordable 3 packages"
            textAlign="center"
          />
        </div>
        <div className="flex justify-center gap-10 py-20">
          <div
            className="flex flex-col justify-around gap-10 p-8 rounded-lg w-80"
            style={{ backgroundColor: "#282A37" }}
          >
            <Paragraph text="Starter Plan" />
            <div className="flex flex-col gap-2">
              <h1 style={{ color: "#ffffff", fontFamily: "Outfit" }}>
                <span className="text-4xl font-bold">$29</span>
                /month
              </h1>
              <Paragraph text="This package is suitable for teams 1-15 people." />
            </div>
            <div className="flex flex-col gap-5">
              <Title text="What’s included:" />
              <div className="flex flex-col gap-2">
                <Paragraph text="10 GB Dedicated Hosting Free" />
                <Paragraph text="Best for Developers, Freelancers" />
                <Paragraph text="1 Year Support " />
              </div>
            </div>
            <Button variant={"outline"} className="border-2 border-gray-700">
              Get Started
            </Button>
          </div>
          <div
            className="flex flex-col justify-evenly gap-10 p-8 rounded-lg w-80"
            style={{ backgroundColor: "#282A37" }}
          >
            <Paragraph text="Basic Plan" />
            <div className="flex flex-col gap-5">
              <h1 style={{ color: "#ffffff", fontFamily: "Outfit" }}>
                <span className="text-4xl font-bold">$79</span>
                /month
              </h1>
              <Paragraph text="This package is suitable for teams 1-50 people." />
            </div>
            <div className="flex flex-col gap-5">
              <Title text="What’s included:" />
              <div className="flex flex-col gap-2">
                <Paragraph text="15 GB Dedicated Hosting Free" />
                <Paragraph text="Best for Developers, Freelancers" />
                <Paragraph text="5 Year Support " />
                <Paragraph text="Free Custom Domain " />
                <Paragraph text="Basic Statistics " />
              </div>
            </div>
            <Button className="text-white">Get Started</Button>
          </div>
          <div
            className="flex flex-col justify-evenly gap-10 p-8 rounded-lg w-80"
            style={{ backgroundColor: "#282A37" }}
          >
            <Paragraph text="Premium Plan" />
            <div className="flex flex-col gap-5">
              <h1 style={{ color: "#ffffff", fontFamily: "Outfit" }}>
                <span className="text-4xl font-bold">$129</span>
                /month
              </h1>
              <Paragraph text="This package is suitable for teams 1-100 people." />
            </div>
            <div className="flex flex-col gap-5">
              <Title text="What’s included:" />
              <div className="flex flex-col gap-2">
                <Paragraph text="20 GB Dedicated Hosting Free" />
                <Paragraph text="Best for Developers, Freelancers" />
                <Paragraph text="Unlimited Support" />
                <Paragraph text="Free Custom Domain " />
                <Paragraph text="Full Statistics" />
              </div>
            </div>
            <Button variant={"outline"} className="border-2 border-gray-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
