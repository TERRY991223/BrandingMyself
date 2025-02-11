// src/components/Header.jsx
import { BrowserRouter as Link } from 'react-router-dom'; // Router와 Link 임포트
import "../style/default.scss";

const Header = () => {
  return (
      <header>
        <div className="header-wrap flex px16" style={{ position: "fixed", top: 0 }}>
          <div className="flex alignCenter justifyBetween" style={{ width: "100%" }}>
            <a href="/" className="pt10 pb5">
              <img src="/public/images/logo.svg" alt="logo" className="w150" />
            </a>
            <nav>
              <ul className="nav-list">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/project">Project</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Header;
