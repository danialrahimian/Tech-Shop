import { homeProducts } from "../../data/Home/homeProducts";
import { getProduct } from "../store/homeProducts";
import { getProductUrl } from "../store/homeProducts";
export const getHomeProduct = (state) => (next) => (action) => {
  const result = next(action);

  if (action.type === getProductUrl.type && homeProducts.length) {
    state.dispatch(getProduct(homeProducts));
  }
  
  return result;
};
