import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import { TAREAS_PROYECTO, AGREGAR_TAREA,VALIDAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA  } from "../../types";


const TareaState = props => {
  const initialState = {
    tareas: [
      { id:1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id:2, nombre: "Elegir Col", estado: true, proyectoId: 2 },
      { id:3, nombre: "Elegir Pla", estado: false, proyectoId: 3 }
    ],
    tareasProyecto: null,
    errortarea: false
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Crear las funciones

  //Obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    });
  };

  //Agregar una tarea al proyecto seleccionado
  const agregarTarea = tarea => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    })
  }

  //valida y mostrar error para tarea
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    })
  }

  //Eliminar tarea por id
  const eliminarTarea = id => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id
    })
  }


  return (
    <TareaContext.Provider 
      value={{ 
    tareas: state.tareas,
    tareasProyecto: state.tareasProyecto,
    errortarea: state.errortarea,
    obtenerTareas,
    agregarTarea,
    validarTarea,
    eliminarTarea
     }}
    >
      {props.children}
    </TareaContext.Provider>
    //otros componentes que seran hijos del TareaContext.provider
  );
};

export default TareaState;
