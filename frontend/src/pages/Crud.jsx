import React, { useState } from "react";
import Layout from "./../navigation/Layout";

const Crud = () => {
  // Estado para almacenar los datos
  const [datos, setDatos] = useState([]);
  // Estado para almacenar los valores de los campos del formulario
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [numeroCuenta, setNumeroCuenta] = useState("");
  const [correo, setCorreo] = useState("");

  // Función para agregar un nuevo dato
  const agregarDato = () => {
    if (
      nombre.trim() !== "" &&
      edad.trim() !== "" &&
      numeroCuenta.trim() !== "" &&
      correo.trim() !== ""
    ) {
      const nuevoDato = {
        nombre: nombre,
        edad: edad,
        numeroCuenta: numeroCuenta,
        correo: correo,
      };
      setDatos([...datos, nuevoDato]);
      // Limpiar los campos del formulario después de agregar un nuevo dato
      setNombre("");
      setEdad("");
      setNumeroCuenta("");
      setCorreo("");
    }
  };

  // Función para eliminar un dato
  const eliminarDato = (indice) => {
    const nuevosDatos = datos.filter((_, i) => i !== indice);
    setDatos(nuevosDatos);
  };

  return (
    <Layout>
      <div className="flex gap-6 fixed right-10 top-10 bottom-10 left-96 h-auto text-xl text-teal-100 font-semibold bg-gradient-to-b from-teal-700 via-teal-500 to-purple-700 rounded-xl">
        <div className="gap-6 p-16 fixed right-20 top-20 bottom-20 left-96 bg-gray-950 flex flex-col items-center rounded-r-xl">
          <h1 className="text-5xl mb-20">
            CRUD
          </h1>
          {/* Formulario para agregar nuevos datos */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mr-2 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              className="mr-2 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Número de cuenta"
              value={numeroCuenta}
              onChange={(e) => setNumeroCuenta(e.target.value)}
              className="mr-2 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="mr-2 rounded-md p-3"
            />
            <button
              onClick={agregarDato}
              className="m-7 p-3 rounded-lg bg-gradient-to-b from-teal-700 via-teal-500 to-purple-700"
            >
              Agregar
            </button>
          </div>
          {/* Lista de datos */}
          <div>
            <ul>
              {datos.map((dato, index) => (
                <li key={index} className="mb-2">
                  {dato.nombre}, {dato.edad}, {dato.numeroCuenta}, {dato.correo}
                  <button onClick={() => eliminarDato(index)} className="ml-2">
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Crud;
