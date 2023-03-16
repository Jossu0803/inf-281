import React from "react";
import "../css/InicioAdmin.css";

function InicioAdmin() {
  const handleLoginClick = () => {
  };
  return (
    <div>
      <header className = "header">
        <div className="contenedor cont-header">
         
          <nav className="nav-prin">
            <a href="ExpositorAdmin">Expositor</a>
            <a href="AdminParticipante">Participante</a>
            <a href="AdminEventos">Eventos</a>
            <a href="AdminNosotros">Nosotros</a>
            <button className="btn btn-primary" onClick={handleLoginClick}><a href="SectionInicio">SALIR</a></button>
          </nav>
        </div>
      </header>
      <h1>Bienvenido al Administrador</h1>
      <div>
        <button  onClick={handleLoginClick}><a href="SectionInicio">Log out</a></button>
      </div>

    </div>
  );
}

export default InicioAdmin;
