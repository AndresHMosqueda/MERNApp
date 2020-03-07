import React from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from '../tareas/ListadoTareas';

function Proyectos() {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Navbar />
        <main>
            <FormTarea/>
          <div className="contenedor-tareas">
              <ListadoTareas/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Proyectos;