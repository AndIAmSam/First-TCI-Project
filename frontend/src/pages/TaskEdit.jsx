import React, { useContext, useState, useEffect } from "react";
import Layout from "../navigation/Layout";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import "./../styles/Pages.css";
import AnimatedFigures from "../components/AnimatedFigures";

const TaskEdit = () => {
  const { getTask, updateTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTasks = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
        console.log(task);
      }
    };
    loadTasks();
  }, []);

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
          <h1 className="text-5xl mb-20">EDIT TASK</h1>
          {/* Formulario para agregar nuevos datos */}
          <div className="mb-6">
            <Formik
              initialValues={task}
              enableReinitialize={true}
              onSubmit={async (values, actions) => {
                if (params.id) {
                  await updateTask(params.id, values);
                  navigate("/taskpage");
                  console.log("Updating task");
                } else {
                  await createTask(values);
                }

                setTask({
                  title: "",
                  description: "",
                });
              }}
            >
              {({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Write a title"
                    onChange={handleChange}
                    value={values.title}
                  ></input>

                  <label>Description</label>
                  <textarea
                    name="description"
                    rows="3"
                    placeholder="Write a description"
                    onChange={handleChange}
                    value={values.description}
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="m-7 p-3 rounded-lg transition duration-500 ease-in-out bg-teal-500 hover:bg-purple-700 transform hover:-translate-y-1 hover:scale-110"
                  >
                    {isSubmitting ? "Guardando..." : "Guardar"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          {/* Lista de datos */}
          <div></div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default TaskEdit;
