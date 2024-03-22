import React from "react";
import Layout from "../navigation/Layout";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import "./../styles/Pages.css";
import AnimatedFigures from "../components/AnimatedFigures";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Home = () => {
  return (
    <Layout>
      <motion.div className="flex gap-6 fixed right-10 top-10 bottom-10 left-96 h-auto text-xl text-teal-100 font-semibold bg-gradient-to-b from-teal-700 via-teal-500 to-purple-700 rounded-xl">
        <motion.div
          className="containerStyle gap-6 fixed right-20 top-20 bottom-20 bg-gray-950 flex justify-center items-center rounded-xl"
          initial={{ x: "-100vw", y: "50vw", opacity: 0, scale: 0 }}
          animate={{ x: 0, y: "0vw", opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatedFigures />
          <div className="max-w-lg mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
            <p className="text-white text-4xl mb-4">
              Bienvenido a nuestra app web para notas.
            </p>
            <p className="text-gray-300">TCI</p>
            <p className="text-gray-300"></p>
            <div className="mx-16 flex flex-col justify-center items-center mt-10 bg-slate-800 rounded-xl">
              <motion.svg
                width="300"
                height="300"
                viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
              >
                <motion.rect
                width="550"
                height="550"
                x="20"
                y="20"
                rx="20"
                stroke="#0099ff"
                strokeWidth="7"
                fill="transparent"
                variants={draw}
                custom={1}
              />
              <motion.circle
                cx="140"
                cy="140"
                r="50"
                stroke="#14b8a6"
                strokeWidth="7"
                fill="transparent"
                variants={draw}
                custom={2}
              />
              <motion.line
                x1="220"
                y1="140"
                x2="500"
                y2="140"
                stroke="#7e22ce"
                strokeWidth="7"
                fill="transparent"
                variants={draw}
                custom={3}
              />
              <motion.circle
                cx="140"
                cy="290"
                r="50"
                stroke="#14b8a6"
                strokeWidth="7"
                fill="transparent"
                variants={draw}
                custom={2}
              />
              <motion.line
                x1="220"
                y1="290"
                x2="500"
                y2="290"
                stroke="#7e22ce"
                strokeWidth="7"
                fill="transparent"
                variants={draw}
                custom={3}
              />
              <motion.circle
                cx="140"
                cy="440"
                r="50"
                stroke="#14b8a6"
                strokeWidth="7"
                fill="transparent"
                variants={draw}
                custom={2}
              />
              <motion.line
                x1="220"
                y1="440"
                x2="500"
                y2="440"
                stroke="#7e22ce"
                strokeWidth="7"
                fill="transparent"
                variants={draw}
                custom={3}
              />
              </motion.svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Home;
