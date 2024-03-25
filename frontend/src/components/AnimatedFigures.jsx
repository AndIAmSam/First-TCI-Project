import React from "react";
import { FaReact } from "react-icons/fa6";
import { motion } from "framer-motion";

const miniDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

function AnimatedFigures() {
  return (
    <div>
      <div className="absolute -top-9 left-1 flex flex-col justify-center items-center mt-10 bg-slate-900 rounded-xl">
            <motion.svg
             width="1064"
             height="30"
              viewBox="0 0 600 600"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="-9950"
                cy="280"
                r="200"
                stroke="#14b8a6"
                strokeWidth="50"
                fill="transparent"
                variants={miniDraw}
                custom={1}
              />
              <motion.line
                x1="-9600"
                y1="280"
                x2="10250"
                y2="280"
                stroke="#7e22ce"
                strokeWidth="50"
                fill="transparent"
                variants={miniDraw}
                custom={2}
              />
              <motion.rect
                width="400"
                height="400"
                x="10400"
                y="90"
                rx="20"
                stroke="#0099ff"
                strokeWidth="50"
                fill="transparent"
                variants={miniDraw}
                custom={3}
              />
            </motion.svg>
          </div>
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
            className="absolute bottom-0 right-0 p-4 "
          >
            <FaReact
              size={70}
              className="transition duration-500 ease-in-out text-purple-700 hover:text-teal-500 transform hover:-translate-y-1 hover:scale-125"
            />
          </motion.div>
    </div>
  );
}

export default AnimatedFigures;