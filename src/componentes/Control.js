import React from "react";
import "../css/Section.css";
import "../css/SectionInicio.css";
import "../css/header.css";
import SectionInicio from "./SectionInicio.js";

function Control() {
  const handleLoginClick = () => {
  };
  return (
    <div>
      <header className="header">
        <div className="contenedor contenido-header">
          <a href="SectionInicio" className="navbar-item">
            <img src="../../logo1.png" alt="Loogo" />
          </a>
          <nav className="navegacion-principal">
            <a href="Control">Inicio</a>
            <a href="ControlEventos">Eventos</a>
            <a href="Control">Ambientes</a>
            <a href="Control">Certificados</a>
            <button className="btn btn-primary" onClick={handleLoginClick}><a href="SectionInicio">Log out</a></button>
          </nav>
        </div>
      </header>
      <SectionInicio esSectionInicio={true}/>
    </div>
    
  );
}

export default Control;