import { Route, Routes } from "react-router-dom";
import CadastroCliente from "../pages/cadastroClientePage";
import CadastrarDestinoPage from "../pages/cadastrarDestinoPage";
import ListClientesPage from "../pages/listClientesPage";
import ListDestinosPage from "../pages/listDestinosPage";
import AtualizarClientePage from "../pages/atualizarClientePage";
import AtualizarDestinoPage from "../pages/atualizarDestinoPage";


const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<CadastroCliente />} />
         <Route path="/cadastrarDestino" element={<CadastrarDestinoPage />} />
         <Route path="/listarClientes" element={<ListClientesPage />} />
         <Route path="/listarDestinos" element={<ListDestinosPage />} />
         <Route path="/atualizarCliente/:id" element={<AtualizarClientePage />} />
         <Route path="/atualizarDestino/:id" element={<AtualizarDestinoPage />} />
      </Routes>
   );
};

export default RoutesMain;