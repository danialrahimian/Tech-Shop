import { shopDatas } from "../../data/shop/productsInfo";
import { getAllProducts, getProductUrl } from "../store/shopProducts";
import type { Middleware } from "@reduxjs/toolkit";

export const getShopProducts: Middleware = (state) => (next) => (action) => {
  const result = next(action);
  if (getProductUrl.match(action) && shopDatas.length) {
    state.dispatch(getAllProducts(shopDatas));
  } else {
    return state;
  }
  return result;
};
