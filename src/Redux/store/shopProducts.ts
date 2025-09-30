import type { productsInfoType, productInfoType } from "../../Types/shopTypes";
import { createAction, createSlice } from "@reduxjs/toolkit";

const shopProductsSlice = createSlice({
  name: "homeProducts",
  initialState: [],
  reducers: {
    addProduct: (
      products: productsInfoType,
      action: { type: string; payload: productInfoType }
    ) => {
      products.push(action.payload);
    },
    getAllProducts: (
      products: productsInfoType,
      action: { type: string; payload: productsInfoType }
    ) => {
      products = action.payload;
      return products;
    },

    removeProduct: (
      categories: productsInfoType,
      action: { type: string; payload: productInfoType }
    ) => {
      categories = categories.filter(
        (category) => category.id !== action.payload.id
      );
      return categories;
    },
    editProductTitle: (
      categories: productsInfoType,
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
      categories: productsInfoType,
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

export default shopProductsSlice.reducer;

export const {
  addProduct,
  getAllProducts,
  removeProduct,
  editProductTitle,
  editProductDescribtion,
} = shopProductsSlice.actions;
