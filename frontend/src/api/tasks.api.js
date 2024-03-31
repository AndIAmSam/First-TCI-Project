import axios from "axios";
import { url } from "../../config.js";

export const getTasksRequest = async () => 
  await axios.get(`${url}/tasks`);

export const createTaskRequest = async (task) => 
  await axios.post(`${url}/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`${url}/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`${url}/${id}`);

  export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`${url}/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) => {
  console.warn(done, "si llega")
  await axios.put(`${url}/tasks/${id}`, done);
}

export const searchTasksRequest = async (search) =>
  await axios.get(`${url}/tasks/search?query=${search}`);


