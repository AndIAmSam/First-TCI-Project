import React from "react";
import Layout from "./../navigation/Layout";
import { motion } from "framer-motion";
import AnimatedFigures from "../components/AnimatedFigures";
import "./../styles/Pages.css";

const Team = () => {
  // Array de integrantes del equipo
  const teamMembers = [
    {
      name: "Samuel Flores",
      position: "UI/UX Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Samuel Flores",
      position: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Samuel Flores",
      position: "Backend Programmer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Samuel Flores",
      position: "Database Administrator",
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
          <AnimatedFigures />
          <div>
            <h2 className="text-white text-4xl font-semibold mb-28">Equipo</h2>
            {/* Iterar sobre el array de integrantes */}
            {teamMembers.map((member, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-teal-200 text-3xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-xl">{member.position}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Team;
