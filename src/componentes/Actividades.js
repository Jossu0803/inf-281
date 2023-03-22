import React from "react";
import "../css/Section.css";
import "../css/Actividades.css";

function Actividades() {
  return (
    <div className="contenedor contenido-SectionActividades">
        <h3 style={{textAlign: "center"}}>Evento X Actividades</h3>
        <div className="actividades">
            <div className="actividad">
                <div className="iconoActividad">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="9 11 12 14 20 6" />
                    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                    </svg>
                </div>
                <div>
                    <div>
                        <p>08:00 - 09:50</p> 
                    </div>
                </div>
                <div>
                    <div>
                        <p>AE-002</p> 
                    </div>
                </div>
                <div>
                    <div>
                        <p>El programa de escritura de actividades CS POGIL</p>
                        <p>Expositor: Pepe</p>
                        <p>Material: </p>
                    </div>
                </div>
            </div>
            <div className="actividad">
                <div className="iconoActividad"> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="9 11 12 14 20 6" />
                    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                    </svg>
                </div>
                <div>
                    <div>
                        <p>10:00 - 11:50</p> 
                    </div>
                </div>
                <div>
                    <div>
                        <p>AE-001</p> 
                    </div>
                </div>
                <div>
                    <div>
                        <p>El programa de escritura de actividades CS POGIL</p>
                        <p>Expositor: Pepe</p>
                        <p>Material: </p>
                    </div>
                </div>
            </div>
            <div className="actividad">
                <div className="iconoActividad">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="9 11 12 14 20 6" />
                    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                    </svg>
                </div>
                <div>
                    <div>
                        <p>12:00 - 13:50</p> 
                    </div>
                </div>
                <div>
                    <div>
                        <p>AE-001</p> 
                    </div>
                </div>
                <div>
                    <div>
                        <p>El programa de escritura de actividades CS POGIL</p>
                        <p>Expositor: Pepe</p>
                        <p>Material: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Actividades;