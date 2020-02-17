import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Login = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    //extraer usuario
    const {email, password} = usuario;

  const onChangeEmail = (e) => {
      guardarUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      })
  };

  const onSubmit = e => {
      e.preventDefault();

      //Validar que no haya campos vacios


      //Pasarlo al action
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            ></input>
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
            ></input>
          </div>
          <div className="campor-form">
            <input type="submit" className="btn btn-primario btn-block"
            value="Iniciar Sesion"></input>
          </div>
        </form>
        <Link to={'/nueva-cuenta'} className="enlace-cuenta">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
