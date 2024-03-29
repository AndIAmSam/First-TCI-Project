import axios from "axios";

export const getTasksRequest = async () => 
  await axios.get("http://back:3000/tasks");

export const createTaskRequest = async (task) => 
  await axios.post("http://back:3000/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://back:3000/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://back:3000/task/${id}`);

  export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://back:3000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) => {
  console.warn(done, "si llega")
  await axios.put(`http://back:3000/tasks/${id}`, done);
}

export const searchTasksRequest = async (search) =>
  await axios.get(`http://back:3000/tasks/search?query=${search}`);


