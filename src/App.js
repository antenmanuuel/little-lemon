import { Route, Routes } from "react-router-dom";
import links from "./utils/links";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Bookings from "./components/pages/Bookings";
import ConfirmedBooking from "./components/pages/Bookings/ConfirmedBooking";
import NotFound from "./components/pages/NotFound";
import UnderConstruction from "./components/pages/UnderConstruction";
import Menu from "./components/pages/Menu";
import About from "./components/pages/About";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={links.get("home").path} element={<Home />} />
          <Route
            path={links.get("about").path}
            element={<About />}
          />
          <Route
            path={links.get("menu").path}
            element={<Menu />}
          />
          <Route path={links.get("bookings").path} element={<Bookings />} />
          <Route
            path={links.get("confirmedBooking").path}
            element={<ConfirmedBooking />}
          />
          <Route
            path={links.get("orderOnline").path}
            element={<UnderConstruction />}
          />
          <Route
            path={links.get("login").path}
            element={<UnderConstruction />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
