import React from "react";
import Empleado from "./components/Empleado";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container p-4">     
      <div className="row">
        <Empleado />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
