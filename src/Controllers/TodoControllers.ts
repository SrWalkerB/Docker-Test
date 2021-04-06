import { Request, Response } from 'express';
import TodoServices from '../Services/TodoServices';

export default new class TodoControllers {
   async listTask(req: Request, resp: Response) {
      try {
         const todoList = await TodoServices.listTaskServices();
         return resp.status(200).json(todoList);
      } catch (error) {
         console.log(error);
         return resp.status(500).json({ err: error });
      }
   }

   async createTask(req: Request, resp: Response) {
      try {
         const { name, description } = req.body;

         const task = await TodoServices.createTaskServices({
            name,
            description,
         });

         return resp.status(201).json(task);
      } catch (error) {
         console.log(error);
         return resp.status(500).json({ err: error });
      }
   }

   async updateTask(req: Request, resp: Response) {
      try {
         const { id } = req.params;
         const { name, description } = req.body;
         const update = await TodoServices.updateTaskServices({
            id,
            name,
            description,
         });

         if (update.err) {
            return resp.status(404).json({ err: update.err });
         }

         return resp.status(200).json({ msg: update.msg });
      } catch (error) {
         console.log(error);
         return resp.status(500).json({ err: error });
      }
   }

   async deleteTask(req: Request, resp: Response) {
      try {
         const { id } = req.params;
         const del = await TodoServices.deleteTaskServices(id);

         if (del.err) {
            return resp.status(404).json({ err: del.err });
         }

         return resp.status(200).json({ msg: del.msg });
      } catch (error) {
         console.log(error);
         return resp.status(500).json({ err: error });
      }
   }
}();
