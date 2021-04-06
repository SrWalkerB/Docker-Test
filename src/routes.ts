import { Router } from 'express';
import TodoControllers from './Controllers/TodoControllers';

const routes = Router();

routes.get('/task', TodoControllers.listTask);

routes.post('/task', TodoControllers.createTask);

routes.put('/task/:id', TodoControllers.updateTask);

routes.delete('/task/:id', TodoControllers.deleteTask);

export default routes;
