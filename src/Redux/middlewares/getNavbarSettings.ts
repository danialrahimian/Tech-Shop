import {
  getNavbarSettingsUrl,
  getAllNavbarSettings,
} from "../store/navbarSettings";

import { navbarProfileSettings } from "../../data/Navbar/navbarData";
import type { Middleware } from "@reduxjs/toolkit";

export const getNavbarSettingsText: Middleware =
  (state) => (next) => (action) => {
    const result = next(action);
    if (getNavbarSettingsUrl.match(action) && navbarProfileSettings.length) {
      state.dispatch(getAllNavbarSettings(navbarProfileSettings));
    } else {
      return state;
    }
    return result;
  };
