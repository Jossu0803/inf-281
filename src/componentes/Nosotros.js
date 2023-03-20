import React from "react";
import "../css/Nosotros.css";

function Nosotros(){
  return (
    <div className="contenedor nosotros-container">
      <br></br>
      <h1 className="title">SOBRE NOSOTROS</h1>
      <div className="nosotros">
        <article className="entrada-nosotros">
          <div className="texto-entrada">
            <h3>MISION</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum laboriosam veritatis error excepturi non provident, sapiente atque tempore cupiditate debitis nemo aliquid saepe corrupti dolor? Explicabo inventore sed iure enim!</p>
            
          </div>
        </article>
        <article>
          <div className="texto-entrada">
            <h3>VISION</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ratione ullam? Accusantium veritatis explicabo inventore non eaque praesentium repellendus, provident ducimus mollitia, laudantium quod earum sequi similique. Facilis, iste impedit!</p>
          </div>
        </article>
      </div>  
        <article className="texto-entrada">
          <div>
            <h3>¿QUIENES SOMOS?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum, architecto, alias ratione voluptatum illum nam rerum quasi aspernatur ad voluptas. Voluptas expedita a sequi natus dolores maxime ipsam veritatis!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed sequi, consectetur voluptatum perspiciatis iusto accusantium aspernatur possimus esse voluptatibus consequatur minus, officia rerum numquam velit aliquam beatae officiis magnam dignissimos.</p>
          </div>
      </article>
      <h2 className="title">NUESTOS EXPOSITORES</h2>
      <div className="contenedor expositores">
        <div className="expositor">
          <img src="../../logo1.png" alt="Loogo" />
          <p>Felipe Altamirano</p>
        </div>
        <div className="expositor">
          <img src="../../logo1.png" alt="Loogo" />
          <p>Leonel Chamaca</p>
        </div>
        <div className="expositor">
          <img src="../../logo1.png" alt="Loogo" />
          <p>Lian Maceda</p>
        </div>
        <div className="expositor">
          <img src="../../logo1.png" alt="Loogo" />
          <p>Josue Canaza</p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
