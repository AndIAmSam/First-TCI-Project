import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./navigation/Sidebar";
import Home from "./pages/Home";
import Configuration from "./pages/Configuration";
import TaskForm from "./pages/TaskForm";
import Team from "./pages/Team";
import Score from "./pages/Score";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import TaskPage from "./pages/TaskPage";
import TaskEdit from "./pages/TaskEdit";
import { TaskContextProvider } from "./context/TaskProvider";

export default function App() {
  return (
    <div>
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/taskform" element={<TaskForm />} />
          <Route path="/taskpage" element={<TaskPage />} />
          <Route path="/edit/:id" element={<TaskEdit />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/team" element={<Team />} />
          <Route path="/score" element={<Score />} />
          <Route path="/search" element={<Search />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </div>
  );
}
