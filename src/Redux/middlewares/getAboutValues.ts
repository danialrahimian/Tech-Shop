import { values } from "../../data/About/about";
import { getAllValue } from "../store/aboutValues";
import { getValuesUrl } from "../store/aboutValues";
export const getAboutValues = (state) => (next) => (action) => {
  const result = next(action);

  if (action.type === getValuesUrl.type && values.length) {
    state.dispatch(getAllValue(values));
  }
  return result;
};
