import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  //State para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confrimar: ""
  });

  //extraer usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChangeEmail = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    //Validar que no haya campos vacios

    //Pasarlo al action

    

    //Revisar que coincidan los passwords
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear Cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre"
             id="nombre" 
             placeholder="Nombre" 
             value={nombre}
             onChange={onChangeEmail}/>
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
           
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChangeEmail}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              name="confirmar"
              id="confirmar"
              placeholder="Repite Password"
              value={confirmar}
              onChange={onChangeEmail}
            />
          </div>
          <div className="campor-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear Cuenta"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
