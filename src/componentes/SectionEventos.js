import React from "react";
import "../css/Section.css";

function SectionEventos({ esControl }) {
  return (
    <div className="contenedor contenido-SectionEventos">
        <h3 style={{textAlign: "center"}}>Nuestros Eventos</h3>
        <div className="eventos">
            <article className="entrada-evento">
                <div className="">
                    <img src="../../logo1.png" alt="Evento" />
                </div>
                <div className="texto-entrada">
                    <a href={esControl ? "ControlActividades" : "Actividades"}>
                        <h4>Evento X</h4>
                        <p className="informacion-meta">Evento: <span>01/01/2023</span> <span></span> </p>
                        <p>Herramientas X</p>
                    </a>
                </div>
            </article>
            <article className="entrada-evento">
                <div className="">
                    <img src="../../logo1.png" alt="Evento" />
                </div>
                <div className="texto-entrada">
                    <a href={esControl ? "ControlActividades" : "Actividades"}>
                        <h4>Evento X</h4>
                        <p className="informacion-meta">Evento: <span>01/01/2023</span> <span></span> </p>
                        <p>Herramientas X</p>
                    </a>
                </div>
            </article>
            <article className="entrada-evento">
                <div className="">
                    <img src="../../logo1.png" alt="Evento" />
                </div>
                <div className="texto-entrada">
                    <a href={esControl ? "ControlActividades" : "Actividades"}>
                        <h4>Evento X</h4>
                        <p className="informacion-meta">Evento: <span>01/01/2023</span> <span></span> </p>
                        <p>Herramientas X</p>
                    </a>
                </div>
            </article>
        </div>
    </div>
  );
}

export default SectionEventos;