import { getNavbarSettingsUrl } from "../store/navbarSettings";
import { getAllNavbarSettings } from "../store/navbarSettings";
import { navbarProfileSettings } from "../../data/Navbar/navbarData";

export const getNavbarSettingsText = (state) => (next) => (action) => {
  const result = next(action);
  if (action.type === getNavbarSettingsUrl.type) {
    state.dispatch(getAllNavbarSettings(navbarProfileSettings));
  } else {
    return state;
  }
  return result;
};
