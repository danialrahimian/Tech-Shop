import type { homeCategoriesType } from "./homeTypes";
import type { homeProductsType } from "./homeTypes";
import type { navbarLinksType } from "./navbarTypes";
import type { navbarProfileSettingsType } from "./navbarTypes";
import type { productsInfoType } from "../Types/shopTypes";
import type { teamMembersType } from "../Types/aboutTypes";
import type { valuesType } from "../Types/aboutTypes";
export type storeType = {
  homeCategories: homeCategoriesType;
  homeProducts: homeProductsType;
  navbarLinks: navbarLinksType;
  navbarSettings: navbarProfileSettingsType;
  shopProducts: productsInfoType;
  aboutTeamMembers: teamMembersType;
  aboutValues: valuesType;
};
