import type {
  homeProductType,
  homeProductsType,
} from "../../Types/homeTypes";
import { createSlice, createAction } from "@reduxjs/toolkit";
const homeProductsSlice = createSlice({
  name: "homeProducts",
  initialState: [],
  reducers: {
    addProduct: (
      products: homeProductsType,
      action: { type: string; payload: homeProductType }
    ) => {
      products.push(action.payload);
    },
    getProduct: (
      products: homeProductsType,
      action: { type: string; payload: homeProductsType }
    ) => {
      products = action.payload;
      return products;
    },

    removeProduct: (
      categories: homeProductsType,
      action: { type: string; payload: homeProductType }
    ) => {
      categories = categories.filter(
        (category) => category.id !== action.payload.id
      );
      return categories;
    },
    editProductTitle: (
      categories: homeProductsType,
      action: { type: string; payload: { id: number; name: string } }
    ) => {
      categories = categories.map((category) => {
        if (category.id === action.payload.id) {
          return {
            ...category,
            name: action.payload.name,
          };
        } else {
          return category;
        }
      });
    },
    editProductDescribtion: (
      categories: homeProductsType,
      action: { type: string; payload: { id: number; describtion: string } }
    ) => {
      categories = categories.map((category) => {
        if (category.id === action.payload.id) {
          return {
            ...category,
            name: action.payload.describtion,
          };
        } else {
          return category;
        }
      });
    },
  },
});
export const getProductUrl = createAction(
  "getProductUrl",
  function prepare(url: string) {
    return {
      payload: {
        url,
      },
    };
  }
);
export const {
  addProduct,
  getProduct,
  removeProduct,
  editProductTitle,
  editProductDescribtion,
} = homeProductsSlice.actions;
export default homeProductsSlice.reducer;
