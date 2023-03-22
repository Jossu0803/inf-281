import React from "react";

function Partipante() {
  const handleLoginClick = () => {
  };
  return (
    <div>
      <header>
        <a href="/Partipante">Inicio</a>
        <a href="/Partipante">Certificados</a>
        <button onClick={handleLoginClick}><a href="/">Login</a></button>
      </header>
      <body>
        <h1>Hola, persona X</h1>
        <div>
          <article className="entrada-evento">
                <div className="">
                    <img src="../../logo1.png" alt="Evento" />
                </div>
                <div className="texto-entrada">
                    <a href="Actividades">
                        <h4>Evento X</h4>
                        <p className="informacion-meta">Evento: <span>01/01/2023</span> <span></span> </p>
                        <p>Detalles del evento.</p>
                    </a>
                </div>
          </article>
          
        </div>
      </body>
    </div>
  );
}
export default Partipante;