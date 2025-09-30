import { shopDatas } from "../../data/shop/productsInfo";
import { getAllProducts } from "../store/shopProducts";
import { getProductUrl } from "../store/homeProducts";

export const getShopProducts = (state) => (next) => (action) => {
  const result = next(action);
  if (action.type === getProductUrl.type) {
    state.dispatch(getAllProducts(shopDatas));
  } else {
    return state;
  }
  return result;
};
