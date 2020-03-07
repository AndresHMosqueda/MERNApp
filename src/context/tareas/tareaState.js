import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import uuid from 'uuid';

import { TAREAS_PROYECTO, AGREGAR_TAREA,VALIDAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA  } from "../../types";


const TareaState = props => {
  const initialState = {
    tareas: [
      { id:1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id:2, nombre: "Elegir Col", estado: true, proyectoId: 2 },
      { id:3, nombre: "Elegir Pla", estado: false, proyectoId: 3 }
    ],
    tareasProyecto: null,
    errortarea: false,
    tareaseleccionada: null,
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

   //Editar o modifica una tarea
   const actualizarTarea = tarea => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea
    })
  }

  //Extraer una tarea par edicion
  const guardarTareaActual = tarea => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea
    })
  }

  //Crear las funciones
  const cambiarEstadoTarea = tarea => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea
    })
  }

  //Obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    });
  };

  //Agregar una tarea al proyecto seleccionado
  const agregarTarea = tarea => {
    tarea.id = uuid.v4();
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
    tareaseleccionada: state.tareaseleccionada,
    obtenerTareas,
    agregarTarea,
    validarTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstadoTarea,
    guardarTareaActual
     }}
    >
      {props.children}
    </TareaContext.Provider>
    //otros componentes que seran hijos del TareaContext.provider
  );
};

export default TareaState;
