import type { ReactNode } from "react";

export type homePropType = {
  getCategoryUrl: () => void;
  getProductUrl: () => void;
  homeCategories: homeCategoriesType;
  homeProducts: homeProductsType;
};
export type homeProductType = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type homeProductsType = homeProductType[];

export type homeCategoryType = {
  id: number;
  name: string;
  icon: ReactNode;
  description: string;
};

export type homeCategoriesType = homeCategoryType[];
