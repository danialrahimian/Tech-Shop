import { useRoutes } from "react-router";
import { routes } from "./routes/routes";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getNavbarLinksUrl } from "./Redux/store/navbarLinks";
import { getNavbarSettingsUrl } from "./Redux/store/navbarSettings";
import { useEffect } from "react";
import type { storeType } from "./Types/storeType";
function App() {
  const appRoutes = useRoutes(routes);
  const navbarLinks = useSelector((state: storeType) => state.navbarLinks);
  const navbarSettings = useSelector(
    (state: storeType) => state.navbarSettings
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNavbarLinksUrl("url"));
    dispatch(getNavbarSettingsUrl("url"));
  });
  return (
    <>
      <Navbar navbarLinks={navbarLinks} navbarSettings={navbarSettings} />
      {appRoutes}
    </>
  );
}

export default App;
