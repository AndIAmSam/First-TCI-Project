import React, { useState } from "react";
import Layout from "../navigation/Layout";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import "./../styles/Pages.css";

const Search = () => {
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para almacenar los resultados de la búsqueda (simulado)
  const [searchResults, setSearchResults] = useState([]);

  // Función para manejar cambios en el campo de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Función para simular la búsqueda de usuarios
  const searchUsers = () => {
    // Aquí puedes realizar la lógica de búsqueda en tu base de datos
    // Por ahora, solo simularemos algunos resultados
    const simulatedResults = [
      {
        id: 1,
        name: "Samuel Flores",
        email: "sam@sam.com",
        id: "1234567",
        age: "22",
      },
      {
        id: 2,
        name: "Samuel Flores",
        email: "sam@sam.com",
        id: "1234567",
        age: "22",
      },
      // Agrega más resultados simulados según sea necesario
    ];
    setSearchResults(simulatedResults);
  };

  return (
    <Layout>
      <div className="flex gap-6 fixed right-10 top-10 bottom-10 left-96 h-auto text-xl text-teal-100 font-semibold bg-gradient-to-b from-teal-700 via-teal-500 to-purple-700 rounded-xl">
        <motion.div
          className="containerStyle gap-6 fixed right-20 top-20 bottom-20 bg-gray-950 flex justify-center items-center rounded-xl"
          initial={{ x: "-100vw", y: "50vw", opacity: 0, scale: 0 }}
          animate={{ x: 0, y: "0vw", opacity: 1, scale: 1 }}
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
            <FaReact
              size={70}
              className="transition duration-500 ease-in-out text-purple-700 hover:text-teal-500 transform hover:-translate-y-1 hover:scale-125"
            />
          </motion.div>
          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">
              Buscar Usuarios
            </h2>
            {/* Formulario para ingresar el término de búsqueda */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                searchUsers();
              }}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Ingrese el nombre del usuario"
                className="bg-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring focus:border-teal-500"
              />
              <button
                type="submit"
                className="m-7 p-3 rounded-lg transition duration-500 ease-in-out bg-teal-500 hover:bg-purple-700 transform hover:-translate-y-1 hover:scale-110"
              >
                Buscar
              </button>
            </form>
            {/* Mostrar los resultados de la búsqueda */}
            <div className="mt-4">
              {searchResults.map((user) => (
                <div key={user.id} className="text-white">
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.id}</p>
                  <p>{user.age}</p>
                  <hr className="my-3 w-2/4 mx-auto border-gray-400 border-2 opacity-50"></hr>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Search;
