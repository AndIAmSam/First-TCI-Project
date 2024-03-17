// Inicio.js
import React from "react";
import Layout from "./../navigation/Layout";

const Inicio = () => {
  return (
    <Layout>
      <div className="flex gap-6 fixed right-10 top-10 bottom-10 left-96 h-auto text-xl text-teal-100 font-semibold bg-gradient-to-b from-teal-700 via-teal-500 to-purple-700 rounded-xl">
        <div className="gap-6 fixed right-20 top-20 bottom-20 left-96 bg-gray-950 flex justify-center items-center rounded-r-xl">
          <div>
            Aquí va el contenido del componente Inicio
          </div>
          <div>
            Si
          </div>
          <div>
            Si
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inicio;
