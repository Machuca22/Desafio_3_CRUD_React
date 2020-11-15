import React, { useEffect, useState } from "react";

import { db } from "../Firebase";

const MayorSalario = () => {
  const [Empleados, setEmpleados] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getEmpleados = async () => {
    db.collection('Empleados').orderBy('salarioN', 'desc').limit(1).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setEmpleados(docs);
    });
  };

  useEffect(() => {
    getEmpleados();
  }, []);

  
  return (
    <>


          <h5>Empleado con mayor salario</h5>
          <table class="table table-hover">
            <thead>
              <tr>
              <th>Codigo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Horas </th>
                <th>Salario</th>
                <th>AFP</th>
                <th>ISSS</th>
                <th>Renta</th>
                <th>Salario Neto</th>
              </tr>
            </thead>
            <tbody>
              {Empleados.map((Empleado) => (
                <tr key={Empleado.id}>
                <td>{Empleado.codigo}</td>
                  <td>{Empleado.nombre}</td>
                  <td>{Empleado.apellido}</td>
                  <td>{Empleado.hTrabajo}</td>
                  <td>${Empleado.salarioL.toFixed(2)}</td>
                  <td>${Empleado.AFP.toFixed(2)}</td>
                  <td>${Empleado.ISSS.toFixed(2)}</td>
                  <td>${Empleado.renta.toFixed(2)}</td>
                  <td>${Empleado.salarioN.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

    </>
  );
};
export default MayorSalario;