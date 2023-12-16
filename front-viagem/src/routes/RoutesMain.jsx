import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePage";
import AboutUs from "../pages/aboutUsPage";
import Destinations from "../pages/destinationsPage";
import Contact from "../pages/contactPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quemSomos" element={<AboutUs />} />
      <Route path="/destinos" element={<Destinations />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
};
