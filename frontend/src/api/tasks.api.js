import axios from "axios";

export const getTasksRequest = async () => 
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/tasks`);

export const createTaskRequest = async (task) => 
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/${id}`);

  export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) => {
  console.warn(done, "si llega")
  await axios.put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${id}`, done);
}

export const searchTasksRequest = async (search) =>
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/tasks/search?query=${search}`);


