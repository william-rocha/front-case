import React, { useContext } from "react";
import Logo from "../../assets/svg/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../appContext/Context";
import "./style.css";

const Header = () => {
  const { ToggleSideBarView, scrollPositon } = useContext(AppContext);
  return (
    <header
      className={`${scrollPositon === "down" ? "scroll-down" : "scroll-up"}`}
    >
      <div id="header-content" className="align-content">
        <div>
          <img src={Logo} id="img-logo" alt="imagem logo" />
        </div>
        <div onClick={() => ToggleSideBarView()}>
          <FontAwesomeIcon
            icon={faBars}
            style={{
              fontSize: scrollPositon === "down" ? "25px" : "35px",
              color: "white",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
