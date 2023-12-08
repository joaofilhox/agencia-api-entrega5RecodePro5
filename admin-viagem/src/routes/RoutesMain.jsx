import { Route, Routes } from "react-router-dom";
import CadastroCliente from "../pages/cadastroClientePage";
import CadastroLugarPage from "../pages/cadastroLugarPage";
import ListClientesPage from "../pages/listClientesPage";
import ListLugaresPage from "../pages/listLugaresPage";
import AtualizarClientePage from "../pages/atualizarClientePage";
import AtualizarLugarPage from "../pages/atualizarLugarPage";


const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<CadastroCliente />} />
         <Route path="/cadastraLugar" element={<CadastroLugarPage />} />
         <Route path="/listarClientes" element={<ListClientesPage />} />
         <Route path="/listarLugares" element={<ListLugaresPage />} />
         <Route path="/atualizarCliente/:id" element={<AtualizarClientePage />} />
         <Route path="/atualizarLugar/:id" element={<AtualizarLugarPage />} />
      </Routes>
   );
};

export default RoutesMain;