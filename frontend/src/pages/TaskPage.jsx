import React, { useEffect } from "react";
import Layout from "../navigation/Layout";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";
import "./../styles/Pages.css";

const TaskPage = () => {
  
  const { tasks, loadTasks } = useTasks();


  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {

    if (tasks.length === 0) return (<h1>No tasks yet</h1>);

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <Layout>
      <div className="flex gap-6 fixed right-10 top-10 bottom-10 left-96 h-auto text-xl text-teal-100 font-semibold bg-gradient-to-b from-teal-700 via-teal-500 to-purple-700 rounded-xl">
        <motion.div
          className="containerStyle gap-6 p-16 fixed right-20 top-20 bottom-20 bg-gray-950 flex flex-col items-center rounded-xl"
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
          <h1 className="text-5xl mb-20">CRUD</h1>
          {/* Contenido */}
          <div className="mb-6 grid grid-cols-3 overflow-x-auto">
            {renderMain()}
          </div>
          {/* Lista de datos */}
        </motion.div>
      </div>
    </Layout>
  );
};

export default TaskPage;
