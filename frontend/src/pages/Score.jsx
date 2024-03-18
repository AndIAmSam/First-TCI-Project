import React from "react";
import Layout from "./../navigation/Layout";
import { motion } from "framer-motion";
import "./../styles/Pages.css";
import { FaReact } from "react-icons/fa6";
import docker from "./../assets/Docker.png";

const Score = () => {
  // Array de integrantes del equipo
  const teamMembers = [
    {
      name: "Samuel Flores",
      score: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Samuel Flores",
      score: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Samuel Flores",
      score: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Samuel Flores",
      score: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

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
          <motion.div
            initial={{ x: "-100vw", y: "50vw", opacity: 0, scale: 0 }}
            animate={{ x: 0, y: "0vw", opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-white text-4xl font-semibold mb-28">
              Sí
            </h2>
            <motion.div className="mb-6">
              <h1>No</h1>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Score;
