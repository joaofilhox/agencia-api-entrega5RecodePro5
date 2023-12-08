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
        <Link to="/cadastraLugar" className="nav-link">
          Cadastra lugar
        </Link>
        <Link to="/listarClientes" className="nav-link">
          Lista de clientes
        </Link>
        <Link to="/listarLugares" className="nav-link">
          Lista de lugares
        </Link>
      </nav>
    </header>
  );
}

export default Header;
