import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiUsers, FiBox } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaDocker } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const menus = [
  { name: "Inicio", link: "/home", icon: MdOutlineDashboard },
  { name: "Crear Tarea", link: "/taskform", icon: FiFolder },
  { name: "Mis Tareas", link: "/taskpage", icon: FiFolder },
  { name: "Buscar", link: "/search", icon: IoSearch },
  { name: "Team", link: "/team", icon: FiUsers },
  { name: "Calificación", link: "/score", icon: AiOutlineHeart, margin: true },
  { name: "Configuración", link: "/configuration", icon: RiSettings4Line },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [showInicioContent, setShowInicioContent] = useState(false);

  return (
    <section className="flex gap-6 fixed left-5 top-5 bottom-5 bg-gradient-to-b from-teal-700 via-teal-500 to-purple-700 rounded-xl m-5">
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`bg-gray-950  ${
          open ? "w-80" : "w-20"
        } duration-700 text-gray-100 px-4 rounded-xl bottom-0`}
      >
        <div className="py-3 flex justify-end">
          <FaDocker
            size={40}
            className={`duration-700 text-blue-600 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <div className="h-auto">
          <h1
            className={`${
              open
                ? "text-5xl flex justify-start"
                : "text-s flex justify-start text-gray-950"
            } duration-700 text-gray-100 px-4 rounded-xl text-center font-bold mb-16`}
          >
            TCI
          </h1>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative p-2">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group mt-10 flex items-center text-lg  gap-3.5 font-medium p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-gray-950 to-gray-950 hover:from-teal-700 hover:via-purple-700 hover:to-gray-950 rounded-md`}
              onClick={() => {
                if (menu.name === "Inicio") {
                  setShowInicioContent(true);
                }
              }}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-8 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-teal-100 font-semibold"></div>
    </section>
  );
};

export default Sidebar;
