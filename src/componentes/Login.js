import React, {useState} from "react";
import "../css/Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginClick = () => {
  };
  return (
    <form className="formulario contenedor">
      <br></br>
      <h1 className="titulo"><strong>INGRESO</strong> </h1>
      <fieldset>
        <label>Correo electrónico:</label>
        <input type="email" placeholder="Correo Electrónico" id="nombre" value={email} onChange={(e) => setEmail(e.target.value)} />
          
        <label>Contraseña:</label>
        <input type="password" placeholder="Contraseña" id="contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      </fieldset>
      <br></br>
      <button type="submit" className="btn btn-primary" onClick={handleLoginClick}><a href="InicioAdmin">INGRESAR</a></button>
      <br></br>
      <button className="btn btn-olvi" href="/">Olvidaste tu contraseña</button>
    </form>
  );
}

export default Login;