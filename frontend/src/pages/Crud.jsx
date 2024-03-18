import React, { useState } from "react";
import Layout from "./../navigation/Layout";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import "./../styles/Pages.css";

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
        <motion.div
          className="containerStyle gap-6 p-16 fixed right-20 top-20 bottom-20 bg-gray-950 flex flex-col items-center rounded-xl"
          initial={{ x: "-100vw", y: "50vw", opacity: 0, scale: 0 }}
          animate={{ x:0, y: "0vw", opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 1, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            while={{ rotate: 360 }}
            className="absolute bottom-0 right-0 p-8 "
          >
            <FaReact size={70} className="transition duration-500 ease-in-out text-purple-700 hover:text-teal-500 transform hover:-translate-y-1 hover:scale-125" />
          </motion.div>
          <h1 className="text-5xl mb-20">CRUD</h1>
          {/* Formulario para agregar nuevos datos */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="bg-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring focus:border-teal-500 p-3 m-3"
            />
            <input
              type="text"
              placeholder="Edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              className="bg-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring focus:border-teal-500 p-3 m-3"
            />
            <input
              type="text"
              placeholder="Número de cuenta"
              value={numeroCuenta}
              onChange={(e) => setNumeroCuenta(e.target.value)}
              className="bg-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring focus:border-teal-500 p-3 m-3"
            />
            <input
              type="text"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="bg-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring focus:border-teal-500 p-3 m-3"
            />
            <button
              onClick={agregarDato}
              className="m-7 p-3 rounded-lg transition duration-500 ease-in-out bg-teal-500 hover:bg-purple-700 transform hover:-translate-y-1 hover:scale-110"
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
                  <button
                    onClick={() => eliminarDato(index)}
                    className="m-7 p-3 rounded-lg transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Crud;
