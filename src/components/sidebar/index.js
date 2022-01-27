import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../appContext/Context";
import UpArrow from "./components/upArrow";
import "./style.css";

const Sidebar = () => {
  const { showSideBar } = useContext(AppContext);
  const links = [
    { route: "/user_data", text: "Dados do usuário" },
    { route: "/create_ad", text: "Criar anúncio" },
    { route: "/shopping_cart", text: "Carrinho" },
    { route: "/my-ads", text: "Meus anúncios" },
    { route: "/sketch", text: "Rascunho" },
    { route: "/pay_slips", text: "Boletos" },
    { route: "/exit", text: "Sair" },
    { route: "/faq", text: "FAQ" },
    { route: "/contact_us", text: "Fale conosco" },
    { route: "/terms_use", text: "Termos de uso" },
    { route: "/privacy_policy", text: "Política de privacidade" },
  ];
  return (
    <section
      className={`align-content ${showSideBar ? "fade-effect" : "open-effect"}`}
      id="sidebar-container"
      style={{ position: "relative" }}
    >
      <UpArrow />
      <div id="sidebar">
        <div>
          <h6>Olá, Renata!</h6>
        </div>
        <ul>
          {links.map((link) => (
            <>
              <li key={link.text}>
                <NavLink
                  to={link.route}
                  className={({ isActive }) =>
                    isActive ? "selected-route" : ""
                  }
                >
                  <span>{link.text}</span>
                </NavLink>
              </li>
              {link.text === "FAQ" && <hr />}
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
