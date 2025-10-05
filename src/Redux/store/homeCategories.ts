import type {
  homeCategoriesType,
  homeCategoryType,
} from "../../Types/homeTypes";
import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState: homeCategoriesType = [];

const homeCategoriesSlice = createSlice({
  name: "homeCategories",
  initialState,
  reducers: {
    addCategory: (
      categories: homeCategoriesType,
      action: { type: string; payload: homeCategoryType }
    ) => {
      categories.push(action.payload);
    },
    removeCategory: (
      categories: homeCategoriesType,
      action: { type: string; payload: homeCategoryType }
    ) => {
      categories = categories.filter(
        (category: homeCategoryType) => category.id !== action.payload.id
      );
      return categories;
    },
    editCategoryTitle: (
      categories: homeCategoriesType,
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
    editCategoryDescribtion: (
      categories: homeCategoriesType,
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
    getAllCategory: (
      categories: homeCategoriesType,
      action: { type: string; payload: homeCategoriesType }
    ) => {
      categories = action.payload;
      return categories;
    },
  },
});

export const getCategoryUrl = createAction(
  "getCategoryUrl",
  function prepare(url: string) {
    return {
      payload: {
        url,
      },
    };
  }
);

export const {
  addCategory,
  removeCategory,
  editCategoryTitle,
  editCategoryDescribtion,
  getAllCategory,
} = homeCategoriesSlice.actions;

export default homeCategoriesSlice.reducer;
