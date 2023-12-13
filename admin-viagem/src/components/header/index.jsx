import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; 

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Cadastra Cliente
        </Link>
        <Link to="/cadastrarDestino" className="nav-link">
          Cadastra Novo Destino
        </Link>
        <Link to="/listarClientes" className="nav-link">
          Lista de clientes
        </Link>
        <Link to="/listarDestinos" className="nav-link">
          Lista de Destinos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
