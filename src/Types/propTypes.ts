import type { ReactNode } from "react";
import type { navbarProfileSettingsType, navbarLinksType } from "./navbarTypes";
import type { productInfoType } from "./shopTypes";
export type teamMemberBoxPropType = {
  name: string;
  position: string;
  avatar: string;
  bio: string;
  isLoaded: boolean;
};

export type productBoxPropType = {
  productInfo: productInfoType;
  rating?: number | undefined;
  reviews?: number | undefined;
  sale?: number | undefined;
  oldPrice?: number | undefined;
};

export type valueBoxPropType = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  isLoaded: boolean;
};

export type homeProductBoxPropType = {
  name: string;
  image: string;
  description: string;
  price: number;
  isLoaded: boolean;
};
export type categoryBoxPropType = {
  name: string;
  icon: ReactNode;
  description: string;
  isLoaded: boolean;
};

export type navbarPropType = {
  navbarSettings: navbarProfileSettingsType;
  navbarLinks: navbarLinksType;
};
