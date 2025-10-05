import type { navbarLinkType, navbarLinksType } from "../../Types/navbarTypes";
import { createSlice, createAction } from "@reduxjs/toolkit";
const initialState: navbarLinksType = [];

const navbarLinksSlice = createSlice({
  name: "navbarLinksSlice",
  initialState,
  reducers: {
    addNavbarLink: (
      navbarLinks: navbarLinksType,
      action: { type: string; payload: navbarLinkType }
    ) => {
      navbarLinks.push(action.payload);
    },
    getNavbarTitle: (
      navbarLinks: navbarLinksType,
      action: { type: string; payload: navbarLinksType }
    ) => {
      navbarLinks = action.payload;
      return navbarLinks;
    },
    deleteNavbarLink: (
      navbarLinks: navbarLinksType,
      action: { type: string; payload: navbarLinkType }
    ) => {
      return navbarLinks.filter(
        (navbarLink) => navbarLink.id !== action.payload.id
      );
    },
    editNavbarLink: (
      categories: navbarLinksType,
      action: { type: string; payload: navbarLinkType }
    ) => {
      categories = categories.map((category) => {
        if (category.id === action.payload.id) {
          return {
            ...category,
            name: action.payload.title,
          };
        } else {
          return category;
        }
      });
    },
  },
});
export const getNavbarLinksUrl = createAction(
  "getNavbarLinksUrl",
  function prepare(url: string) {
    return {
      payload: {
        url,
      },
    };
  }
);

export default navbarLinksSlice.reducer;

export const {
  addNavbarLink,
  getNavbarTitle,
  deleteNavbarLink,
  editNavbarLink,
} = navbarLinksSlice.actions;
