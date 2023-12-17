import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import './style.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Voa e Vibra</div>

        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"><TiThMenu size={30}/></div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
            Cadastrar Novo Cliente
            </Link>
          </li>
          <li>
            <Link to="cadastrarDestino" onClick={toggleMenu}>
            Cadastrar Novo Destino
            </Link>
          </li>
          <li>
            <Link to="/listarClientes" onClick={toggleMenu}>
            Lista de clientes
            </Link>
          </li>
          <li>
            <Link to="/listarDestinos" onClick={toggleMenu}>
            Lista de Destinos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
