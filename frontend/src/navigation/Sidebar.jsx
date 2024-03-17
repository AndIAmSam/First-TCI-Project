import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import miIcono from "./../assets/Docker.png";

const menus = [
  { name: "Inicio", link: "/inicio", icon: MdOutlineDashboard },
  { name: "CRUD", link: "/crud", icon: AiOutlineUser },
  { name: "Item 3", link: "/", icon: FiMessageSquare },
  { name: "Item 4", link: "/", icon: TbReportAnalytics, margin: true },
  { name: "Item 5", link: "/", icon: FiFolder },
  { name: "Item 6", link: "/", icon: FiShoppingCart },
  { name: "Item 7", link: "/", icon: AiOutlineHeart, margin: true },
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
          <HiMenuAlt3
            size={32}
            className={`cursor-pointer duration-700 ${
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
              } group flex items-center text-lg  gap-3.5 font-medium p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-gray-950 to-gray-950 hover:from-teal-700 hover:via-purple-700 hover:to-gray-950 rounded-md`}
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
