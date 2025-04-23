import { useTheme } from "@/providers/theme-provider";
import { Button } from "../ui/button";
import Title from "../ui/title";
import { themeHandler } from "@/utils/themeHandler";
import Img1 from "../../images/bicycle1.webp";
import Paragraph from "../ui/paragraph";
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";
import { useOfferedTimeLeft } from "@/utils/offeredTimeLeft";

const Footer = () => {
  const { theme } = useTheme();
  const { textColor } = themeHandler({ theme });
  const timeLeft = useOfferedTimeLeft("2025-02-20T23:59:59");

  return (
    <div className="mx-auto w-full mt-5 md:10 lg:mt-20 md:pt-2 pb-5 md:pb-10 px-5 md:px-10 lg:px-20">
      <div className="bg-gradient-to-r from-bright-royal-blue from-0% to-electric-violet to-100% py-5 px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-5 rounded-md">
        <div className="flex gap-5 items-center">
          <img src={Img1} alt="" className="w-20" />
          <div>
            <h1 className="font-outfit md:text-2xl font-semibold">
              🔥 BIGGEST OFFER! Up to 50% OFF
            </h1>
            <h1 className="font-outfit md:text-2xl font-semibold">
              —Hurry, limited time! ⏳
            </h1>
          </div>
        </div>
        <div>
          <h1 className="font-outfit text-4.5xl font-semibold">{timeLeft}</h1>
        </div>
        <Button
          variant={"secondary"}
          className="bg-white text-black hover:text-white animate-bounce"
        >
          Grab it now!
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-10 pt-10">
        <div className="flex flex-col gap-2 md:gap-6 w-full md:w-[30%]">
          <h1 className="font-outfit font-semibold text-xl md:text-4xl">
            TRAIL
          </h1>
          <p className="font-inter text-sm text-white/80">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudanti totam aperiam inventore veritatis congue
            tristique ultrices. Purus finibus dapibus nunc neque commodo
            tellusin dapi magna quam posuere.
          </p>
          <div>
            <h1 className="font-outfit font-semibold text-lg md:text-3xl">
            Social Media
            </h1>
            <div className="flex gap-5 mt-2 md:mt-5" style={{ color: textColor }}>
              <Facebook
                className="p-2 border-2 hover:border-vivid-amethyst border-bright-royal-blue animate-pulse hover:scale-110 duration-1500"
                size={40}
              />
              <Youtube
                className="p-2 border-2 hover:border-vivid-amethyst border-bright-royal-blue animate-pulse hover:scale-110 duration-1000"
                size={40}
              />
              <Instagram
                className="p-2 border-2 hover:border-vivid-amethyst border-bright-royal-blue animate-pulse hover:scale-110 duration-1500"
                size={40}
              />
              <Linkedin
                className="p-2 border-2 hover:border-vivid-amethyst border-bright-royal-blue animate-pulse hover:scale-110 duration-1000"
                size={40}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6">
          <div>
            <Title text="Want to call with us?" fontSize="xl" />
            <div className="flex gap-5 items-center my-5">
              <PhoneCall className="text-bright-royal-blue " size={24} />
              <div>
                <Title text="Phone" fontSize="md" textAlign="left" />
                <Paragraph text="+123 456 7890" fontSize="sm" />
              </div>
            </div>
          </div>
          <Title
            text="Quick Links"
            fontSize="lg"
            color={textColor}
            textAlign="left"
          />
          <div className="flex flex-col gap-2" style={{ color: textColor }}>
            <Paragraph text="About" fontSize="sm" />
            <Paragraph text="Careers" fontSize="sm" />
            <Paragraph text="Blog" fontSize="sm" />
            <Paragraph text="Contact" fontSize="sm" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <Title text="Want to email with us?" fontSize="xl" />
            <div className="flex gap-5 items-center my-5">
              <Mail className="text-bright-royal-blue " size={24} />
              <div>
                <Title text="Email" fontSize="md" textAlign="left" />
                <Paragraph text="trail@domain.com" fontSize="sm" />
              </div>
            </div>
          </div>
          <Title
            text="Customer Service"
            fontSize="lg"
            color={textColor}
            textAlign="left"
          />
          <div className="flex flex-col gap-2">
            <Paragraph text="Privacy Policy" fontSize="sm" />
            <Paragraph text="Terms & Conditions" fontSize="sm" />
            <Paragraph text="Customer Support" fontSize="sm" />
            <Paragraph text="Delivery Details" fontSize="sm" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-6">
          <div>
            <Title text="Want to visit us?" fontSize="xl" textAlign="left" />
            <div className="flex gap-5 items-center my-5">
              <MapPin className="text-bright-royal-blue " size={24} />
              <div>
                <Title text="Location" fontSize="md" textAlign="left" />
                <Paragraph text="Puputan Renon 122, Dhaka" fontSize="sm" />
              </div>
            </div>
          </div>
          <Title
            text="OUR SHOP"
            fontSize="lg"
            color={textColor}
            textAlign="left"
          />
          <div className="flex flex-col gap-2">
            <Paragraph text="Bikes & Parts" fontSize="sm" />
            <Paragraph text="Clothing" fontSize="sm" />
            <Paragraph text="Bikes For Rent" fontSize="sm" />
            <Paragraph text="Booking Form" fontSize="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
