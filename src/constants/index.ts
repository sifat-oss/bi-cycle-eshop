import CCycle1 from "../images/c-cycle1.jpg";
import CCycle2 from "../images/c-cycle2.jpg";
import CCycle6 from "../images/c-cycle6.jpg";
import cycle1 from "../images/bg-cycle2.jpg";
import cycle2 from "../images/bg-cycle3.jpg";
import cycle3 from "../images/bg-cycle4.jpg";
import cycle4 from "../images/bg-cycle5.jpg";
import cycle5 from "../images/bg-cycle6.jpg";
import cycle6 from "../images/bg-cycle7.jpg";
import Apparel from "../images/apparel.jpeg";
import Accessories from "../images/accesorie.jpeg";
import Component from "../images/component.jpeg";
import Bag from "../images/bag.jpg";
import Shoes from "../images/shoes.jpg";
import Kit from "../images/kit.jpg";
import Repair from "../images/cycle-repair.jpg";
import Fitting from "../images/cycle-fitting.jpg";
import Rental from "../images/cycle-rental.jpg";
import News1 from "../images/latest_new1.webp";
import News2 from "../images/latest_new2.webp";
import News3 from "../images/latest_new3.webp";
import { Bicycle, TBicycleData } from "@/types/bicycle.type";

export const headerMenu = [
  { label: "Home", value: "" },
  { label: "About", value: "about" },
  { label: "All Bicycles", value: "all-bicycles" },
  { label: "Dashboard", value: "dashboard" },
  { label: "Contact", value: "contact" },
];

export const bicycles: Bicycle[] = [
  {
    id: 1,
    name: "On-Road, Off-Road, Any Road",
    description:
      "It's the most advanced, best performing alloy race bike ever made. Fitting, since aluminum is the 13th element.",
    brand: "Trek",
    image: CCycle1,
  },
  {
    id: 2,
    name: "Break Free From The Same Roads",
    description:
      "Don’t overthink it. Mellow to mad. Wild to mild. Whatever your trail riding style, Habit’s got what you need.",
    brand: "Giant",
    image: CCycle2,
  },
  {
    id: 3,
    name: "On-Road, Break Free From The Same Roads",
    description:
      "A perfect blend of road and mountain bike features. Whatever your trail riding style, Habit’s got what you need.",
    brand: "Specialized",
    image: CCycle6,
  },
];

export const customerReviews = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    comment:
      "This platform transformed the way I do business. Highly recommended!",
  },
  {
    id: 2,
    name: "Mark Smith",
    email: "mark@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "Great customer support and amazing features. Absolutely love it!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    email: "sophia@example.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    comment:
      "An outstanding experience! The UI is smooth and the support team is fantastic.",
  },
];

export const bicyclesData: TBicycleData[] = [
  {
    id: 1,
    name: "Mountain Explorer 5000",
    brand: "TrailMaster",
    model: "MX-5000",
    description: "A robust mountain bike designed for off-road adventures.",
    type: "Mountain",
    frame: {
      material: "Aluminum",
      size: "M",
      color: "Red",
    },
    wheel: {
      size: 27,
      rim_material: "Alloy",
      tire_type: "Knobby",
    },
    brakes: {
      type: "Disc",
      brand: "Shimano",
    },
    suspension: {
      type: "Full",
      front_fork: "RockShox",
    },
    handlebar: {
      type: "Flat",
      material: "Aluminum",
      width: "720mm",
    },
    pedals: {
      type: "Clipless",
      material: "Composite",
    },
    weight: "13kg",
    price: 799.99,
    quantity: 10,
    inStock: true,
    image: {
      front_view: cycle1,
      side_view: "image1-side.jpg",
    },
  },
  {
    id: 2,
    name: "Speedster Road Pro",
    brand: "SpeedCycle",
    model: "S-200",
    description: "A high-performance road bike for speed enthusiasts.",
    type: "Road",
    frame: {
      material: "Carbon",
      size: "L",
      color: "Blue",
    },
    wheel: {
      size: 28,
      rim_material: "Carbon",
      tire_type: "Road",
    },
    brakes: {
      type: "Caliper",
      brand: "Campagnolo",
    },
    suspension: {
      type: "None",
      front_fork: "Carbon Fork",
    },
    handlebar: {
      type: "Drop",
      material: "Carbon",
      width: "400mm",
    },
    pedals: {
      type: "Clipless",
      material: "Carbon",
    },
    weight: "7.8kg",
    price: 1499.99,
    quantity: 20,
    inStock: true,
    image: {
      front_view: cycle2,
      side_view: "image2-side.jpg",
    },
  },
  {
    id: 3,
    name: "Mountain Bike X1",
    brand: "Trek",
    model: "Marlin 7",
    description: "A great entry-level mountain bike for exploring trails.",
    type: "Mountain",
    frame: {
      material: "Aluminum",
      size: '17.5"',
      color: "Black",
    },
    wheel: {
      size: 29,
      rim_material: "Aluminum",
      tire_type: "Knobby",
    },
    gear: {
      shifters: "Shimano Altus",
      derailleurs: {
        front: "Shimano Tourney",
        rear: "Shimano Altus",
      },
      number_of_gears: 21,
    },
    brakes: {
      type: "Hydraulic Disc",
      brand: "Tektro",
    },
    suspension: {
      type: "Front",
      front_fork: "SR Suntour XCT",
    },
    handlebar: {
      type: "Riser",
      material: "Aluminum",
      width: "720mm",
    },
    saddle: {
      type: "Sport",
      brand: "Bontrager",
    },
    pedals: {
      type: "Platform",
      material: "Plastic",
    },
    weight: "14 kg",
    accessories: {
      kickstand: true,
    },
    price: 600,
    quantity: 0,
    inStock: false,
    image: {
      front_view: cycle3,
      side_view: "/images/trek_marlin7_side.jpg",
      back_view: "/images/trek_marlin7_back.jpg",
    },
  },
  {
    id: 4,
    name: "Road Bike Aero",
    brand: "Giant",
    model: "Contend AR 4",
    description: "Fast and comfortable road bike for long rides.",
    type: "Road",
    frame: {
      material: "Aluminum",
      size: "54cm",
      color: "Blue",
    },
    wheel: {
      size: 700,
      rim_material: "Aluminum",
      tire_type: "Road",
    },
    gear: {
      shifters: "Shimano Claris",
      derailleurs: {
        front: "Shimano Claris",
        rear: "Shimano Claris",
      },
      number_of_gears: 16,
    },
    brakes: {
      type: "Rim",
      brand: "Tektro",
    },
    suspension: {
      type: "None",
      front_fork: "N/A",
    },
    handlebar: {
      type: "Drop",
      material: "Aluminum",
      width: "42cm",
    },
    saddle: {
      type: "Racing",
      brand: "Giant",
    },
    pedals: {
      type: "Clipless",
      material: "Aluminum",
    },
    weight: "9.5 kg",
    accessories: {
      lights: {
        front: true,
        rear: true,
      },
    },
    price: 850,
    quantity: 10,
    inStock: true,
    image: {
      front_view: cycle4,
    },
  },
  {
    id: 5,
    name: "Hybrid Bike City",
    brand: "Cannondale",
    model: "Quick 5",
    description: "Perfect for commuting and city riding.",
    type: "Hybrid",
    frame: {
      material: "Aluminum",
      size: "Medium",
      color: "Grey",
    },
    wheel: {
      size: 700,
      rim_material: "Aluminum",
      tire_type: "Hybrid",
    },
    gear: {
      shifters: "Shimano Tourney",
      derailleurs: {
        front: "Shimano Tourney",
        rear: "Shimano Tourney",
      },
      number_of_gears: 7,
    },
    brakes: {
      type: "V-Brake",
      brand: "Promax",
    },
    suspension: {
      type: "None",
      front_fork: "N/A",
    },
    handlebar: {
      type: "Flat",
      material: "Aluminum",
      width: "680mm",
    },
    saddle: {
      type: "Comfort",
      brand: "Cannondale",
    },
    pedals: {
      type: "Platform",
      material: "Plastic",
    },
    weight: "12 kg",
    accessories: {
      rear_rack: true,
      fenders: true,
    },
    price: 500,
    quantity: 50,
    inStock: false,
    image: {
      front_view: cycle5,
      side_view: "/images/cannondale_quick5_side.jpg",
    },
  },
  {
    id: 6,
    name: "BMX Bike Freestyle",
    brand: "Cult",
    model: "Gateway",
    description: "Ideal for tricks and skatepark riding.",
    type: "BMX",
    frame: {
      material: "Chromoly",
      size: '20.5"',
      color: "Red",
    },
    wheel: {
      size: 20,
      rim_material: "Aluminum",
      tire_type: "BMX",
    },
    gear: {
      number_of_gears: 1,
    },
    brakes: {
      type: "U-Brake",
      brand: "Cult",
    },
    suspension: {
      type: "None",
      front_fork: "N/A",
    },
    handlebar: {
      type: "BMX",
      material: "Chromoly",
      width: '8.75"',
    },
    pedals: {
      type: "Platform",
      material: "Plastic",
    },
    weight: "11 kg",
    price: 400,
    quantity: 5,
    inStock: true,
    image: {
      front_view: cycle6,
    },
  },
];

export const bicycleAccessory = [
  {
    id: 1,
    image: Apparel,
    name: "Apparel",
  },
  {
    id: 2,
    image: Accessories,
    name: "Accesories",
  },
  {
    id: 3,
    image: Component,
    name: "Component",
  },
  {
    id: 4,
    image: Bag,
    name: "Bicycle Bag",
  },
  {
    id: 5,
    image: Shoes,
    name: "Shoes",
  },
  {
    id: 6,
    image: Kit,
    name: "Custom Cycling Kit",
  },
];

export const OurServices = [
  {
    image: Repair,
    title: "Bicycle Repair",
    description:
      "We offer comprehensive repairs and maintenance services to ensure your bicycle is in top condition. Repair services include flat tire repair, brake adjustments, and gear tuning.",
  },
  {
    image: Fitting,
    title: "Bicycle Fitting",
    description:
      "Our professional bike fitting service ensures your bike is set up to fit you perfectly. For more information please visit our bike fitting page.",
  },
  {
    image: Rental,
    title: "Bicycle Rental",
    description:
      "Rent a bike for a day, a weekend, or a week to explore the city or hit the trails.",
  },
];

export const NewsData = [
  {
    id: "n1",
    title: "Ninja Mountain Bike Performance",
    time: "February 01, 2024",
    description:
      "Ninja Mountain Bike Performance is a mountain bike skills clinic designed to help you improve your riding skills. For more information, visit the Ninja Mountain Bike Performance website.",
    image: News1,
  },
  {
    id: "n2",
    title: "The Best Convertible Gear On The Market",
    time: "January 08, 2025",
    description:
      "The best convertible gear on the market. The new convertible gear on the market...",
    image: News2,
  },
  {
    id: "n3",
    title: "Harness The Power Of Your Hormones",
    time: "January 25, 2025",
    description:
      "Harness the power of your hormones. The new hormone harness is designed to help you get the most out of ...",
    image: News3,
  },
];

export const bicycleTypeOptions = [
  { value: "Mountain", label: "Mountain" },
  { value: "Road", label: "Road" },
  { value: "Hybrid", label: "Hybrid" },
  { value: "Electric", label: "Electric" },
  { value: "BMX", label: "BMX" },
];

export const frameMaterialOptions = [
  { value: "Aluminum", label: "Aluminum" },
  { value: "Carbon Fiber", label: "Carbon Fiber" },
  { value: "Steel", label: "Steel" },
  { value: "Titanium", label: "Titanium" },
  { value: "Chromoly", label: "Chromoly" },
  { value: "Magnesium", label: "Magnesium" },
];

export const frameColorOptions = [
  { value: "White", label: "White" },
  { value: "Green", label: "Green" },
  { value: "Yellow", label: "Yellow" },
  { value: "Blue", label: "Blue" },
  { value: "Red", label: "Red" },
  { value: "Matte Black", label: "Matte Black" },
  { value: "Glossy Red", label: "Glossy Red" },
  { value: "Silver", label: "Silver" },
];

export const frameSizeOptions = [
  { value: "48 cm", label: 48 },
  { value: "50 cm", label: 50 },
  { value: "52 cm", label: 52 },
  { value: "54 cm", label: 54 },
  { value: "56 cm", label: 56 },
  { value: "58 cm", label: 58 },
  { value: "60 cm", label: 60 },
  { value: "62 cm", label: 62 },
  { value: "64 cm", label: 64 },
  { value: "66 cm", label: 66 },
  { value: "68 cm", label: 68 },
  { value: "70 cm", label: 70 },
  { value: "72 cm", label: 72 },
];

export const singleBicycleData = {
  name: "Mountain Explorer 5000",
  brand: "TrailMaster",
  model: "MX-5000",
  description: "A robust mountain bike designed for off-road adventures.",
  type: "Mountain",
  frame: {
    material: "Aluminum",
    size: "M",
    color: "Red",
  },
  wheel: {
    size: 27,
    rim_material: "Alloy",
    tire_type: "Knobby",
  },
  gear: {
    shifters: "Shimano Nexus",
    derailleurs: {
      front: "None",
      rear: "Shimano Nexus",
    },
    number_of_gears: 3,
  },
  brakes: {
    type: "Disc",
    brand: "Shimano",
  },
  suspension: {
    type: "Full",
    front_fork: "RockShox",
  },
  handlebar: {
    type: "Flat",
    material: "Aluminum",
    width: "720mm",
  },
  saddle: {
    type: "Leather",
    brand: "Brooks",
  },
  pedals: {
    type: "Clipless",
    material: "Composite",
  },
  weight: "13kg",
  price: 799.99,
  quantity: 10,
  inStock: true,
  image: {
    front_view: "https://i.ibb.co.com/FkcqGCrP/pCycle21.jpg",
    side_view: "https://i.ibb.co.com/0RxkmGNw/pCycle19.webp",
    back_view: "https://i.ibb.co.com/yctgFR06/closeup-bicycle5.jpg",
    rear_view: "https://i.ibb.co.com/3yVDjJsc/closeup-bicycle6.jpg",
    close_up_gears: "https://i.ibb.co.com/cKfgcPyn/closeup-bicycle10.jpg",
  },
};
