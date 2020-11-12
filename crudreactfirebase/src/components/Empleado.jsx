import React, { useEffect, useState } from "react";
import EmpleadosForm from "./EmpleadosForm";

import { db } from "../Firebase";
import { toast } from "react-toastify";

const Empleados = () => {
  const [Empleados, setEmpleados] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getEmpleados = async () => {
    db.collection("Empleados").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setEmpleados(docs);
    });
  };

  const onDeleteEmpleado = async (id) => {
    if (window.confirm("Esta seguro de eliminar este empleado?")) {
      await db.collection("Empleados").doc(id).delete();
      toast("Se elimino un empleado", {
        type: "error",
        //autoClose: 2000
      });
    }
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
          await db.collection("Empleados").doc().set(EmpleadoObject);
          toast("Se agrego un Empleado", {
            type: "success",
          });
        } else if (EmpleadoObject.hTrabajo > 160 && EmpleadoObject.hTrabajo <=200){
          EmpleadoObject.salarioL = (160* 9.75) + ((EmpleadoObject.hTrabajo-160)*11.50);
          EmpleadoObject.AFP = EmpleadoObject.salarioL * 0.0688;
          EmpleadoObject.ISSS = EmpleadoObject.salarioL * 0.0525;
          EmpleadoObject.renta = EmpleadoObject.salarioL * 0.10;
          EmpleadoObject.salarioN = EmpleadoObject.salarioL - EmpleadoObject.AFP- EmpleadoObject.ISSS - EmpleadoObject.renta;
          await db.collection("Empleados").doc().set(EmpleadoObject);
          toast("Se agrego un Empleado", {
            type: "success",
          });
        } else if (EmpleadoObject.hTrabajo > 200 && EmpleadoObject.hTrabajo <=250){
          EmpleadoObject.salarioL = (160* 9.75) + (40*11.50) + ((EmpleadoObject.hTrabajo-200)*12.50);
          EmpleadoObject.AFP = EmpleadoObject.salarioL * 0.0688;
          EmpleadoObject.ISSS = EmpleadoObject.salarioL * 0.0525;
          EmpleadoObject.renta = EmpleadoObject.salarioL * 0.10;
          EmpleadoObject.salarioN = EmpleadoObject.salarioL - EmpleadoObject.AFP- EmpleadoObject.ISSS - EmpleadoObject.renta;
          await db.collection("Empleados").doc().set(EmpleadoObject);
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
        await db.collection("Empleados").doc(currentId).update(EmpleadoObject);
        toast("Se actualizo un Empleado", {
          type: "info",
        });
        setCurrentId("");
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
      </div>

      <div className="col-md-8 p-2">
        <div class="container">
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
                    <button className="btn btn-success" >Calcular el pago</button>
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
