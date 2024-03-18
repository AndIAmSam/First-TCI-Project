import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./navigation/Sidebar";
import Home from "./pages/Home";
import Configuration from "./pages/Configuration";
import Crud from "./pages/Crud";
import Team from "./pages/Team";
import Score from "./pages/Score";
import Search from "./pages/Search";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/crud" element={<Crud />} /> 
        <Route path="/configuration" element={<Configuration />} /> 
        <Route path="/team" element={<Team />} /> 
        <Route path="/score" element={<Score />} /> 
        <Route path="/search" element={<Search />} /> 
      </Routes>
    </div>
);
}
