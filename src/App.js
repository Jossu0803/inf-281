//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./componentes/Header.js";
import SectionInicio from "./componentes/SectionInicio.js";
import Footer from "./componentes/Footer.js";
import Section from "./componentes/Section.js";
import SectionEventos from "./componentes/SectionEventos.js";
import Nosotros from "./componentes/Nosotros.js";
import Contactanos from "./componentes/Contactanos.js";
import Faq from "./componentes/Faq.js";
import Login from "./componentes/Login";
import InicioAdmin from "./componentes/InicioAdmin.js";
import ExpositorAdmin from "./componentes/ExpositorAdmin.js";
import AdminParticipante from "./componentes/AdminParticipante";
import AdminEventos from "./componentes/AdminEventos";
import AdminNosotros from "./componentes/AdminNosotros";
//import { useState } from "react";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/SectionInicio":
      component = <SectionInicio esSectionInicio={true}/>
    break

    case "/Nosotros":
      component = <Nosotros />
    break

    case "/SectionEventos":
      component = <SectionEventos />
    break

    case "/Contactanos":
      component = <Contactanos />
    break
    case "/Faq":
      component = <Faq />
    break

    case "/Login":
      component = <Login />
    break

    case "/InicioAdmin":
      component = <InicioAdmin />
      break
    case "/ExpositorAdmin":
      component = <ExpositorAdmin />
      break
    case "/AdminParticipante":
      component = <AdminParticipante />
      break
    case "/AdminEventos":
      component = <AdminEventos />
      break
    case "/AdminNosotros":
      component = <AdminNosotros />
    break
  }

  return (
    <div className="App">
      <Header />
      {component}
      <Section />
      <Footer />
    </div>
  );
}

export default App;
