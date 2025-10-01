import { homeProducts } from "../../data/Home/homeProducts";
import { getProduct, getProductUrl } from "../store/homeProducts";
import type { Middleware } from "@reduxjs/toolkit";

export const getHomeProduct: Middleware = (state) => (next) => (action) => {
  const result = next(action);

  if (getProductUrl.match(action) && homeProducts.length) {
    state.dispatch(getProduct(homeProducts));
  }

  return result;
};
