import {Router} from 'express';
import { getTasks, getTask, createTasks, updateTask, deleteTask, getSearchedTasks } from '../controlers/task.controllers.js';

const router = Router();

router.get('/tasks', getTasks)

router.get('/task/:id', getTask)

router.get('/tasks/search', getSearchedTasks)

router.post('/tasks', createTasks)

router.put('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)


export default router;