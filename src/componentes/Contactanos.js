import React, {useState} from "react";
import "../css/Contactanos.css";
import "../css/Login.css";

function Contactanos() {
  const [email, setEmail] = useState('');
  return (
    <div className="contenedor contenido-contactanos">
      <h3 className="titulo">CONTACTANOS AHORA</h3>
      <div className="datos-contactanos">
        <p>Av. JJ perez #1234</p>
        <p>sges_eventosa@gmail.com</p>
        <p>+591 76543210</p>
      </div>
      <form className="formulario contenedor">
        <fieldset>
          <label>
          Nombre:
          </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>
          E-mail:
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>
          Asunto:
          </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="btn btn-primary">Enviar</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Contactanos;