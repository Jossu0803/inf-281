import React from "react";
import "../css/header.css";

function Header() {
  const handleLoginClick = () => {
  };
  return (
    <header className="header">
      <div className="contenedor contenido-header">
        <a href="SectionInicio" className="navbar-item">
          <img src="../../logo1.png" alt="Loogo" />
        </a>
        <nav className="navegacion-principal">
          <a href="SectionInicio">Inicio</a>
          <a href="SectionEventos">Eventos</a>
          <a href="Nosotros">Nosotros</a>
          <a href="Contactanos">Contactanos</a>
          <a href="Faq">FAQ</a>
          <button className="btn btn-primary" onClick={handleLoginClick}><a href="Login">Login</a></button>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
