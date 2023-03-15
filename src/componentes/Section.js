import React from "react";
import "../css/Section.css";

function Section() {
  return (
    <section className='' id='datos'>
      <div className="contenedor contenido-Section">
          <h3>Siguenos en nuestras redes sociales</h3>
          <div className="iconos-Section">
            <a className="nav-link" href="https://www.facebook.com">
              <img src="facebook.png" alt="logo1" />
            </a>
            <a className="nav-link" href="https://www.twitter.com">
              <img src="twitter.png" alt="logo2" />
            </a>
            <a className="nav-link" href="https://www.instagram.com">
              <img src="instagram.png" alt="logo3" />
            </a>
            <a className="nav-link" href="https://www.Linkedin.com">
              <img src="linkedin.png" alt="logo4" />
            </a>
          </div>
      </div>
    </section>
    
  );
}

export default Section;