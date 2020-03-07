import React, { Fragment, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { useContext } from "react";

const NuevoProyecto = () => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  });

  const { nombre } = proyecto;

  //lee los contenidos del input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  //Cuando el usuario envia un proyecto
  const onSubmitProyecto = e => {
    e.preventDefault();

    //validar el proyecto
    if(nombre === '') {
      mostrarError();
      return;
    };

    //agregar al state
    agregarProyecto(proyecto)
    //Reiniciar el form
    guardarProyecto({
      nombre: ''
    })
  };

  return (
    <Fragment>
      <button className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
        >Nuevo Proyecto</button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" >
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
            onClick={onSubmitProyecto}
          />
        </form>
      ) : null}

      {errorFormulario ? <p className="mensaje error">El nombre es obligatorio</p> : null}
    </Fragment>
  );
};

export default NuevoProyecto;