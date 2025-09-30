import type { productsInfoType } from "../../Types/shopTypes";
import iphone14pro from "../../assets/images/iphone14pro.jpg";
import galaxys22 from "../../assets/images/galaxys22.jpg";
import pixel7 from "../../assets/images/pixel7.jpg";
import oneplus10pro from "../../assets/images/oneplus10pro.jpg";
import mi11ultra from "../../assets/images/mi11ultra.jpg";
import xperia1iv from "../../assets/images/xperia1iv.jpg";

export const shopDatas: productsInfoType = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    imageUrl: iphone14pro,
    description:
      "The iPhone 14 Pro features a ProMotion display and A16 Bionic chip for exceptional performance.",
    price: 999,
  },
  {
    id: 2,
    name: "Samsung Galaxy S22+",
    imageUrl: galaxys22,
    description:
      "The Samsung Galaxy S22+ offers a stunning display, powerful processor, and an advanced camera system.",
    price: 850,
  },
  {
    id: 3,
    name: "Google Pixel 7",
    imageUrl: pixel7,
    description:
      "Google Pixel 7 features an intelligent camera and a streamlined Android experience with regular updates.",
    price: 599,
  },
  {
    id: 4,
    name: "OnePlus 10 Pro",
    imageUrl: oneplus10pro,
    description:
      "The OnePlus 10 Pro delivers blazing fast performance, a fluid display, and rapid charging technology.",
    price: 749,
  },
  {
    id: 5,
    name: "Xiaomi Mi 11 Ultra",
    imageUrl: mi11ultra,
    description:
      "Xiaomi Mi 11 Ultra stands out with its impressive camera capabilities and top-notch hardware.",
    price: 899,
  },
  {
    id: 6,
    name: "Sony Xperia 1 IV",
    imageUrl: xperia1iv,
    description:
      "The Sony Xperia 1 IV boasts a cinematic display and professional-grade camera features for multimedia enthusiasts.",
    price: 1099,
  },
];
