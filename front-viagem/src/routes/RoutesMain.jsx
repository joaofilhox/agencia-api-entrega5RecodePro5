import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePage";
import QuemSomos from "../pages/quemSomosPage";
import Destinos from "../pages/destinosPage";
import Contato from "../pages/contatoPage";

export const RoutesMain = () => {
    return (
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/quemSomos" element={<QuemSomos />} />
         <Route path="/destinos" element={<Destinos />} />
         <Route path="/contato" element={<Contato />} />
      </Routes>
    )
}