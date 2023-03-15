
import "../css/InicioAdmin.css";
function InicioAdmin() {
  const handleLoginClick = () => {
  };
  return (
    <div>
      <h1>Bienvenido al Administrador</h1>
      <header>
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

    </div>
  );
}

export default InicioAdmin;
