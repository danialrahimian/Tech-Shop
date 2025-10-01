import { categories } from "../../data/Home/homeCategories";
import { getAllCategory, getCategoryUrl } from "../store/homeCategories";
import type { Middleware } from "@reduxjs/toolkit";

export const getHomeCategory: Middleware = (state) => (next) => (action) => {
  const result = next(action);

  if (getCategoryUrl.match(action) && categories.length) {
    state.dispatch(getAllCategory(categories));
  }
  return result;
};
