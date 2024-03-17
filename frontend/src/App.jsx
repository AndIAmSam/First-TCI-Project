import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./navigation/Sidebar";
import Inicio from "./pages/Inicio";
import Configuration from "./pages/Configuration";
import Crud from "./pages/Crud";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/inicio" element={<Inicio />} /> 
        <Route path="/crud" element={<Crud />} /> 
        <Route path="/configuration" element={<Configuration />} /> 
      </Routes>
    </div>
);
}
