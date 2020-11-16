import React, { useContext } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import SignIn from "./SigIn";
import Empleados from "./pages/Empleado";
import { UserContext } from "../provider/UserProvider";

function Application() {

  const user = useContext(UserContext);

  return (
    user ? <Empleados />  // true
      : // false
      <Router exact path="/" > 
          <SignIn />   
      </Router>
  );
}

export default Application;
