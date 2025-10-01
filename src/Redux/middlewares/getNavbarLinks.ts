import { NavbarlinksTitle } from "../../data/Navbar/navbarData";
import { getNavbarTitle, getNavbarLinksUrl } from "../store/navbarLinks";
import type { Middleware } from "@reduxjs/toolkit";

export const getNavbarLinks: Middleware = (state) => (next) => (action) => {
  const result = next(action);
  if (getNavbarLinksUrl.match(action) && NavbarlinksTitle.length) {
    state.dispatch(getNavbarTitle(NavbarlinksTitle));
  } else {
    return state;
  }
  return result;
};
