import React from "react";
import "../css/Section.css";
import "../css/SectionInicio.css";

function SectionInicio({ esSectionInicio }) {
  return (
    <section className={esSectionInicio ? "sectionInicio" : "section"}>
      <div className="contenedor contenido-SectionInicio">
        <h1 className="title">
          <br></br>
          SISTEMA DE GESTION <br></br> DE EVENTOS ACADEMICOS
        </h1>
        <div >
          <p className="text"><strong>UNETE A NOSOTROS</strong><br></br>SOMOS la elite, lo mejor de lo mejor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionInicio;
