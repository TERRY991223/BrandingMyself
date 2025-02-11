import {NavLink} from 'react-router-dom';
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
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/project">Project</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Header;
