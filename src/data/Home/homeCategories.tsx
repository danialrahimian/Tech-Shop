import type { homeCategoriesType } from "../../Types/homeTypes";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export const categories: homeCategoriesType = [
  {
    id: 1,
    name: "Laptops",
    icon: <LaptopIcon sx={{ fontSize: 40 }} />,
    description: "Powerful laptops for work and gaming",
  },
  {
    id: 2,
    name: "Smartphones",
    icon: <PhoneAndroidIcon sx={{ fontSize: 40 }} />,
    description: "Latest smartphones with cutting-edge features",
  },
  {
    id: 3,
    name: "Headphones",
    icon: <HeadphonesIcon sx={{ fontSize: 40 }} />,
    description: "Premium audio for an immersive experience",
  },
  {
    id: 4,
    name: "Smart Devices",
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    description: "Intelligent gadgets for modern living",
  },
];
