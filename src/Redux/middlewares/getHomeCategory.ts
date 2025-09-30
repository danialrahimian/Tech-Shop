import { categories } from "../../data/Home/homeCategories";
import { getAllCategory } from "../store/homeCategories";
import { getCategoryUrl } from "../store/homeCategories";
export const getHomeCategory = (state) => (next) => (action) => {
  const result = next(action);

  if (action.type === getCategoryUrl.type && categories.length) {
    state.dispatch(getAllCategory(categories));
  }
  return result;
};
