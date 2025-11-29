import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

// 1. IMPORTANTE: Importar a imagem aqui para o Vite encontrar ela
import logoImg from "../assets/images/minha-foto.png";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Link principal (Logo) */}
        {/* O 'to' deve ser "/" para voltar para a Home ao clicar */}
        <NavLink to="/" className="logo" onClick={closeNav}>
          {/* Aqui exibimos a imagem importada */}
          <img
            src={logoImg}
            alt="Logo HitaluDev"
            style={{
              height: "50px",
              width: "auto",
            }} /* Ajuste o tamanho conforme necessário */
          />
          {/* Se quiser manter o texto ao lado da imagem, deixe a linha abaixo. Se não, pode apagar. */}
          <span style={{ marginLeft: "10px" }}>HitaluDev</span>
        </NavLink>

        <nav className={`nav-menu ${isNavOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeNav}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projetos"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeNav}
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeNav}
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeNav}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className={`hamburger ${isNavOpen ? "active" : ""}`}
          onClick={toggleNav}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
