import React from "react";
import "../css/ExpositorAdmin.css";
import "../css/Section.css";
function ExpositorAdmin() {
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
            <button className="btn btn-primary" onClick={handleLoginClick}><a href="SectionInicio">Log out</a></button>
          </nav>
        </div>
      </header>
      <h1>Bienvenido a EXPOSITOR</h1>
      <button className="btn btn-primary" onClick={handleLoginClick}><a href="ExpositorAdmin">Agregar</a></button>
      <div className="eventos">
        <article className="entrada-evento">
          <div className="">
            <img src="../../logo1.png" alt="Evento" />
          </div>
          <div className="texto-entrada">
            <a href="index.js">
              <h4>Nombre del expositor</h4>
              <p className="informacion-meta">Detalles <span></span> </p>
              <button className="btn btn-second" onClick={handleLoginClick}><a href="ExpositorAdmin">editar</a><span></span></button>
              <button className="btn btn-third" onClick={handleLoginClick}><a href="ExpositorAdmin">eliminar</a></button>
            </a>
          </div>
        </article>
        <article className="entrada-evento">
          <div className="">
            <img src="../../logo1.png" alt="Evento" />
          </div>
          <div className="texto-entrada">
            <a href="index.js">
              <h4>Nombre del expositor</h4>
              <p className="informacion-meta">Detalles  <span></span> </p>
              <button className="btn btn-second" onClick={handleLoginClick}><a href="ExpositorAdmin">editar</a><span></span></button>
              <button className="btn btn-third" onClick={handleLoginClick}><a href="ExpositorAdmin">eliminar</a></button>
            </a>
          </div>
        </article>
        <article className="entrada-evento">
          <div className="">
            <img src="../../logo1.png" alt="Evento" />
          </div>
          <div className="texto-entrada">
            <a href="index.js">
              <h4>Nombre del expositor</h4>
              <p className="informacion-meta">Detalles <span></span> </p>
              <button className="btn btn-second" onClick={handleLoginClick}><a href="ExpositorAdmin">editar</a><span></span></button>
              <button className="btn btn-third" onClick={handleLoginClick}><a href="ExpositorAdmin">eliminar</a></button>
            </a>
          </div>
        </article>
        <article className="entrada-evento">
          <div className="">
            <img src="../../logo1.png" alt="Evento" />
          </div>
          <div className="texto-entrada">
            <a href="index.js">
              <h4>Nombre del expositor</h4>
              <p className="informacion-meta">Detalles <span></span> </p>
              <button className="btn btn-second" onClick={handleLoginClick}><a href="ExpositorAdmin">editar</a><span></span></button>
              <button className="btn btn-third" onClick={handleLoginClick}><a href="ExpositorAdmin">eliminar</a></button>
            </a>
          </div>
        </article>
      </div>
      
    </div>
  );
}
export default ExpositorAdmin;