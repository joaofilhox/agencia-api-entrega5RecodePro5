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
              Home
            </Link>
          </li>
          <li>
            <Link to="/quemSomos" onClick={toggleMenu}>
              Quem Somos
            </Link>
          </li>
          <li>
            <Link to="/destinos" onClick={toggleMenu}>
              Destinos
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={toggleMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
