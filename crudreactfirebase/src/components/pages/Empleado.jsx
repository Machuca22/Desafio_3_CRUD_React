import React, { useEffect, useState } from "react";
import EmpleadosForm from "./EmpleadosForm";

import { firestore } from "../../Firebase";
import { toast } from "react-toastify";
import MenorSalario from "./MenorSalario";
import MayorSalario from "./MayorSalario";


const Empleados = () => {
  <div>
  <nav>
      <div className="logo">Parcial DPS</div>
      <ul className="nav-links">
          <li><a>Home</a></li>
          <li><a>Admin</a></li>
          <li><a>Log Out</a></li>
      </ul>
  </nav>
</div>
  const [Empleados, setEmpleados] = useState([]);
  const [Empleado, setEmpleado] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getEmpleados = async () => {
    //firestore.collection('Empleados').orderBy('salarioN', 'asc').limit(1).onSnapshot((querySnapshot) => {
    firestore.collection("Empleados").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setEmpleados(docs);
    });
  };

  const onDeleteEmpleado = async (id) => {
    if (window.confirm("Esta seguro de eliminar este empleado?")) {
      await firestore.collection("Empleados").doc(id).delete();
      toast("Se elimino un empleado", {
        type: "error",
        //autoClose: 2000
      });
    }
  };

  const detalleEmpleado = async (id) => {
      firestore.collection("Empleados").doc(id).get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          const docs = [];
          docs.push({ ...doc.data(), id: doc.id });
          console.log('Document data:', doc.data());
          setEmpleado(docs);
        }
      })
        

      /*toast("Se elimino un empleado", {
        type: "error",
        //autoClose: 2000
      });*/
  };

  useEffect(() => {
    getEmpleados();
  }, []);

  const addOrEditEmpleado = async (EmpleadoObject) => {
    try {
      if (currentId === "") {
        if (EmpleadoObject.hTrabajo > 0 && EmpleadoObject.hTrabajo <=160){
          EmpleadoObject.salarioL = EmpleadoObject.hTrabajo * 9.75;
          EmpleadoObject.AFP = EmpleadoObject.salarioL * 0.0688;
          EmpleadoObject.ISSS = EmpleadoObject.salarioL * 0.0525;
          EmpleadoObject.renta = EmpleadoObject.salarioL * 0.10;
          EmpleadoObject.salarioN = EmpleadoObject.salarioL - EmpleadoObject.AFP- EmpleadoObject.ISSS - EmpleadoObject.renta;
          await firestore.collection("Empleados").doc().set(EmpleadoObject);
          toast("Se agrego un Empleado", {
            type: "success",
          });
        } else if (EmpleadoObject.hTrabajo > 160 && EmpleadoObject.hTrabajo <=200){
          EmpleadoObject.salarioL = (160* 9.75) + ((EmpleadoObject.hTrabajo-160)*11.50);
          EmpleadoObject.AFP = EmpleadoObject.salarioL * 0.0688;
          EmpleadoObject.ISSS = EmpleadoObject.salarioL * 0.0525;
          EmpleadoObject.renta = EmpleadoObject.salarioL * 0.10;
          EmpleadoObject.salarioN = EmpleadoObject.salarioL - EmpleadoObject.AFP- EmpleadoObject.ISSS - EmpleadoObject.renta;
          await firestore.collection("Empleados").doc().set(EmpleadoObject);
          toast("Se agrego un Empleado", {
            type: "success",
          });
        } else if (EmpleadoObject.hTrabajo > 200 && EmpleadoObject.hTrabajo <=250){
          EmpleadoObject.salarioL = (160* 9.75) + (40*11.50) + ((EmpleadoObject.hTrabajo-200)*12.50);
          EmpleadoObject.AFP = EmpleadoObject.salarioL * 0.0688;
          EmpleadoObject.ISSS = EmpleadoObject.salarioL * 0.0525;
          EmpleadoObject.renta = EmpleadoObject.salarioL * 0.10;
          EmpleadoObject.salarioN = EmpleadoObject.salarioL - EmpleadoObject.AFP- EmpleadoObject.ISSS - EmpleadoObject.renta;
          await firestore.collection("Empleados").doc().set(EmpleadoObject);
          toast("Se agrego un Empleado", {
            type: "success",
          });
        }else {
          toast("Debe ingresar una cantidad valida de horas", {
            type: "error",
            //autoClose: 2000
          });
        }
      } else {
        /*await firestore.collection("Empleados").doc(currentId).update(EmpleadoObject);
        toast("Se actualizo un Empleado", {
          type: "info",
        });
        setCurrentId("");*/
        if (EmpleadoObject.hTrabajo > 0 && EmpleadoObject.hTrabajo <=160){
          EmpleadoObject.salarioL = EmpleadoObject.hTrabajo * 9.75;
          EmpleadoObject.AFP = EmpleadoObject.salarioL * 0.0688;
          EmpleadoObject.ISSS = EmpleadoObject.salarioL * 0.0525;
          EmpleadoObject.renta = EmpleadoObject.salarioL * 0.10;
          EmpleadoObject.salarioN = EmpleadoObject.salarioL - EmpleadoObject.AFP- EmpleadoObject.ISSS - EmpleadoObject.renta;
          await firestore.collection("Empleados").doc(currentId).update(EmpleadoObject);
          toast("Se actualizo un Empleado", {
            type: "info",
          });
          setCurrentId("");
        } else if (EmpleadoObject.hTrabajo > 160 && EmpleadoObject.hTrabajo <=200){
          EmpleadoObject.salarioL = (160* 9.75) + ((EmpleadoObject.hTrabajo-160)*11.50);
          EmpleadoObject.AFP = EmpleadoObject.salarioL * 0.0688;
          EmpleadoObject.ISSS = EmpleadoObject.salarioL * 0.0525;
          EmpleadoObject.renta = EmpleadoObject.salarioL * 0.10;
          EmpleadoObject.salarioN = EmpleadoObject.salarioL - EmpleadoObject.AFP- EmpleadoObject.ISSS - EmpleadoObject.renta;
          await firestore.collection("Empleados").doc(currentId).update(EmpleadoObject);
          toast("Se actualizo un Empleado", {
            type: "info",
          });
          setCurrentId("");
        } else if (EmpleadoObject.hTrabajo > 200 && EmpleadoObject.hTrabajo <=250){
          EmpleadoObject.salarioL = (160* 9.75) + (40*11.50) + ((EmpleadoObject.hTrabajo-200)*12.50);
          EmpleadoObject.AFP = EmpleadoObject.salarioL * 0.0688;
          EmpleadoObject.ISSS = EmpleadoObject.salarioL * 0.0525;
          EmpleadoObject.renta = EmpleadoObject.salarioL * 0.10;
          EmpleadoObject.salarioN = EmpleadoObject.salarioL - EmpleadoObject.AFP- EmpleadoObject.ISSS - EmpleadoObject.renta;
          await firestore.collection("Empleados").doc(currentId).update(EmpleadoObject);
          toast("Se actualizo un Empleado", {
            type: "info",
          });
          setCurrentId("");
        }else {
          toast("Debe ingresar una cantidad valida de horas", {
            type: "error",
            //autoClose: 2000
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="col-md-4 p-2">
        <h2>Agregar Empleado</h2>
        <EmpleadosForm {...{ addOrEditEmpleado, currentId, Empleados }} />
        <br/>
        <div className="card card-body border-primary">
        <h4>Detalle salario</h4>
        {Empleado.map((Empleadod) => (
                <tr key={Empleadod.id}>
                <p>Codigo: {Empleadod.codigo}</p>
                  <p>Nombre: {Empleadod.nombre}</p>
                  <p>Apellido: {Empleadod.apellido}</p>
                  <p>Horas:{Empleadod.hTrabajo}</p>
                  <p>Salario Liquido: ${Empleadod.salarioL.toFixed(2)}</p>
                  <p>AFP: ${Empleadod.AFP.toFixed(2)}</p>
                  <p>ISSS: ${Empleadod.ISSS.toFixed(2)}</p>
                  <p>Renta: ${Empleadod.renta.toFixed(2)}</p>
                  <p>Salario Neto: ${Empleadod.salarioN.toFixed(2)}</p>
                </tr>
              ))}
        </div>
      </div>

      <div className="col-md-8 p-2">
        
        <div class="container">
        <MayorSalario/>
        <MenorSalario/>
          <h2>Lista Empleados</h2>
          <table class="table table-hover">
            <thead>
              <tr>
              <th>Codigo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Horas de Trabajo</th>
                <th>Salario</th>
                <th>Aciones</th>
              </tr>
            </thead>
            <tbody>
              {Empleados.map((Empleado) => (
                <tr key={Empleado.id}>
                <td>{Empleado.codigo}</td>
                  <td>{Empleado.nombre}</td>
                  <td>{Empleado.apellido}</td>
                  <td>{Empleado.hTrabajo}</td>
                  <td>${Empleado.salarioL}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => setCurrentId(Empleado.id)}>Editar</button>
                    &nbsp;
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => onDeleteEmpleado(Empleado.id)}>Eliminar</button>
                    &nbsp;
                    &nbsp;
                    <button className="btn btn-success" onClick={() => detalleEmpleado(Empleado.id)}>Detalle</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Empleados;
