import './style.css';
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Voa e Vibra</div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/quemSomos">
              Quem Somos
            </Link>
          </li>
          <li>
            <Link to="/destinos">
              Destinos
            </Link>
          </li>
          <li>
            <Link to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
