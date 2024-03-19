import React, { useContext, useState } from "react";
import Layout from "../navigation/Layout";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import {useParams} from "react-router-dom";
import "./../styles/Pages.css";

const TaskForm = () => {

  const { createTask } = useTasks();
  const params = useParams();
  console.log(params);

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
          <h1 className="text-5xl mb-20">CREATE TASK</h1>
          {/* Formulario para agregar nuevos datos */}
          <div className="mb-6">
            <Formik
              initialValues={{
                title: "",
                description: "",
              }}
              onSubmit={async (values, actions) => {
                createTask(values);
                actions.resetForm();
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
                  <button type="submit" disabled={isSubmitting} className="m-7 p-3 rounded-lg transition duration-500 ease-in-out bg-teal-500 hover:bg-purple-700 transform hover:-translate-y-1 hover:scale-110">
                    {isSubmitting ? "Guardando..." : "Guardar"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          {/* Lista de datos */}
          <div>
            
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default TaskForm;
