import { combineReducers } from "redux";
import homeCategoriesReducer from "./store/homeCategories";
import homeProductsReducer from "./store/homeCategories";
import navbarLinksReducer from "./store/navbarLinks";
import navbarSettingsReduser from "./store/navbarSettings";
import shopProductsReducer from "./store/shopProducts";
import aboutTeamMembersReducer from "./store/aboutTeamMembers";
import aboutValuesReducer from "./store/aboutValues";
import { getHomeCategory } from "./middlewares/getHomeCategory";
import { getHomeProduct } from "./middlewares/getHomeProduct";
import { getNavbarLinks } from "./middlewares/getNavbarLinks";
import { getNavbarSettingsText } from "./middlewares/getNavbarSettings";
import { getShopProducts } from "./middlewares/getShopProducts";
import { getAboutTeamMembers } from "./middlewares/getAboutTeamMembers";
import { getAboutValues } from "./middlewares/getAboutValues";
import { configureStore, Tuple } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  homeCategories: homeCategoriesReducer,
  homeProducts: homeProductsReducer,
  navbarLinks: navbarLinksReducer,
  navbarSettings: navbarSettingsReduser,
  shopProducts: shopProductsReducer,
  aboutTeamMembers: aboutTeamMembersReducer,
  aboutValues: aboutValuesReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: () =>
    new Tuple(
      getHomeCategory,
      getHomeProduct,
      getNavbarLinks,
      getNavbarSettingsText,
      getShopProducts,
      getAboutTeamMembers,
      getAboutValues
    ),
});
export default store;
