import React, {useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {

  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //obtener la funcion del context de tarea
  const tareasContext = useContext(TareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual
  } = tareasContext;

  const [proyectoActual] = proyecto;

  //Fn para eliminar tarea
const tareaEliminar = id => {
    eliminarTarea(id)
    obtenerTareas(proyectoActual.id)
}


//Fn para cambiar Estado
const cambiarEstado = tarea => {
  if(tarea.estado) {
    tarea.estado = false;
  } else {
    tarea.estado = true;
  }
  cambiarEstadoTarea(tarea)
}

//Agrega una tarea actual cuando el usuario desea editarla
const seleccionarTarea = tarea => {
  guardarTareaActual(tarea)
}

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado ? (
          <button onClick={() => cambiarEstado(tarea)} type="button" className="completo">
            Completo{" "}
          </button>
        ) : (
          <button onClick={() => cambiarEstado(tarea)} type="button" className="incompleto">
            Incompleto{" "}
          </button>
        )}
      </div>

      <div className="acciones">
        <button onClick={() => seleccionarTarea(tarea)} type="button" className="btn btn-primario">
          Editar
        </button>
        <button type="button" className="btn btn-secundario" onClick={() => tareaEliminar(tarea.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
