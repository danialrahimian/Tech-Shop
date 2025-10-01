import { values } from "../../data/About/about";
import { getAllValue ,getValuesUrl } from "../store/aboutValues";
import type { Middleware } from "@reduxjs/toolkit";

export const getAboutValues: Middleware = (state) => (next) => (action) => {
  const result = next(action);

  if (getValuesUrl.match(action) && values.length) {
    state.dispatch(getAllValue(values));
  }
  return result;
};
