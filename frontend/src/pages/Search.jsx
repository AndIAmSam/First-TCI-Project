import React, { useEffect, useState } from "react";
import Layout from "../navigation/Layout";
import { motion } from "framer-motion";
import { useTasks } from "../context/TaskProvider";
import TaskCard from "../components/TaskCard";
import "./../styles/Pages.css";
import AnimatedFigures from "../components/AnimatedFigures";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchTasks } = useTasks();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await searchTasks(searchTerm);
        setSearchResults(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchResults();
  }, [searchTerm, searchTasks]);

  return (
    <Layout>
      <div className="flex gap-6 fixed right-10 top-10 bottom-10 left-96 h-auto text-xl text-teal-100 font-semibold bg-gradient-to-b from-teal-700 via-teal-500 to-purple-700 rounded-xl">
        <motion.div
          className="containerStyle gap-6 p-16 fixed right-20 top-20 bottom-20 bg-gray-950 flex flex-col items-center rounded-xl"
          initial={{ x: "-100vw", y: "50vw", opacity: 0, scale: 0 }}
          animate={{ x: 0, y: "0vw", opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatedFigures />

          <h2 className="text-white text-2xl font-semibold mb-4">
            Buscar Tareas
          </h2>
          {/* Formulario para ingresar el término de búsqueda */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              value={searchTerm}
              placeholder="Busca tu tarea"
              onChange={(e) => setSearchTerm(e.target.value)}
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

          {searchTerm === "" ? (
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className="mb-10 text-3xl">Busca cualquiera de tus tareas</h1>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className="mb-10 text-3xl">No hay resultados</h1>
            </div>
          ) : (
            <div className="mb-6 grid grid-cols-3 overflow-x-auto">
              {searchResults.map((task) => (
                <TaskCard task={task} key={task.id} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Search;
