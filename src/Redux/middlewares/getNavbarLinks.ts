import { getNavbarLinksUrl } from "../store/navbarLinks";
import { getNavbarTitle } from "../store/navbarLinks";
import { NavbarlinksTitle } from "../../data/Navbar/navbarData";
export const getNavbarLinks = (state) => (next) => (action) => {
  const result = next(action);
  if (action.type === getNavbarLinksUrl.type) {
    state.dispatch(getNavbarTitle(NavbarlinksTitle));
  } else {
    return state;
  }
  return result;
};
