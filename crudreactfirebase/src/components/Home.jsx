import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../Firebase";
import { BrowseRouter as Router, Link } from "react-router-dom";
import Empleados from "./pages/Empleado";

const Home = () => {
  
  // Asigna un user para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  const user = useContext(UserContext);

  const { photoURL, displayName, email } = user;
  console.log(" Usuario ProfilePage : " + displayName + " - " + email);

  const signOut = () => {
    auth.signOut();  
  };

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">DPS</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Inicio</Link></li>
            <li><Link to="empleado">Empleado</Link></li>
             <button className="btn btn-danger" onClick={() => { signOut() }}>
              Sign out</button>
          </ul>
        </div>
      </nav>
      <Router>
        <Empleados exact path="empleado" />
      </Router>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="float-center">
              <br></br>
             Bienvenido : <h2 className="text-2xl font-semibold">{displayName}</h2>
              <br></br>
             Correo: <h3 className="italic">{email}</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;

