import React from "react";
import "../css/Section.css";
import "../css/SectionInicio.css";
import "../css/header.css";
import SectionEventos from "./SectionEventos";

function ControlEventos() {
  const handleLoginClick = () => {
  };
  return (
    <div>
      <header className="header">
        <div className="contenedor contenido-header">
          <a href="Control" className="navbar-item">
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
      <SectionEventos esControl={true}/>
    </div>
    
  );
}

export default ControlEventos;