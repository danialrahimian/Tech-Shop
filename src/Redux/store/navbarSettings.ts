import type {
  navbarProfileSettingsType,
  navbarProfileSettingType,
} from "../../Types/navbarTypes";
import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState: navbarProfileSettingsType = [];

const navbarSettingsSlice = createSlice({
  name: "navbarSettingsSlice",
  initialState,
  reducers: {
    addNavbarSettings: (
      navbarSettings: navbarProfileSettingsType,
      action: { type: string; payload: navbarProfileSettingType }
    ) => {
      navbarSettings.push(action.payload);
    },
    removeNavbarSettings: (
      navbarSettings: navbarProfileSettingsType,
      action: { type: string; payload: navbarProfileSettingType }
    ) => {
      return navbarSettings.filter(
        (navbarSetting) => navbarSetting.id !== action.payload.id
      );
    },
    getAllNavbarSettings: (
      navbarSettings: navbarProfileSettingsType,
      action: { type: string; payload: navbarProfileSettingsType }
    ) => {
      navbarSettings = action.payload;
      return navbarSettings;
    },
    editNavbarSettingsText: (
      navbarSettings: navbarProfileSettingsType,
      action: { type: string; payload: navbarProfileSettingType }
    ) => {
      navbarSettings = navbarSettings.map((category) => {
        if (category.id === action.payload.id) {
          return {
            ...category,
            name: action.payload.text,
          };
        } else {
          return category;
        }
      });
    },
  },
});

export const getNavbarSettingsUrl = createAction(
  "getSettingsUrl",
  function prepare(url: string) {
    return {
      payload: url,
    };
  }
);

export default navbarSettingsSlice.reducer;

export const {
  addNavbarSettings,
  removeNavbarSettings,
  getAllNavbarSettings,
  editNavbarSettingsText,
} = navbarSettingsSlice.actions;
