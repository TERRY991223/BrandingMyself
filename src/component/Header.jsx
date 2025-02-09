import { BrowserRouter } from "react-router-dom";
import "../style/default.scss";
import Navigation from "./Navigation.jsx"; // Navigation 컴포넌트 불러오기

const Header = () => {
  return (
    <header>
    <BrowserRouter>
      <div className="header-wrap flex px16" style={{ position: "fixed", top: 0 }}>
        <div className="flex alignCenter justifyBetween" style={{ width: "100%" }}>
          <div className="p10">
            <p className="terry italic">TERRY</p>
          </div>
          <Navigation />
        </div>
      </div>
    </BrowserRouter>
    </header>
  );
};

export default Header;
