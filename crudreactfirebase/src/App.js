import React from "react";
import Empleado from "./components/Empleado";
import "./App.css";


import Application from "./components/Application";
import UserProvider from "./provider/UserProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container p-4">  
      <UserProvider>   
        <div className="row">
          <Application />
        </div>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
