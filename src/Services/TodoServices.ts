import TaskModel from '../models/TaskModel';
import { ICreateTodo, IUpdateTodo } from './TodoInterfaces';

export default new class TodoServices {
   async listTaskServices() {
      const tasks = await TaskModel.find();
      return tasks;
   }

   async createTaskServices(data: ICreateTodo) {
      const taskModel = TaskModel;

      const task = await taskModel.create({
         name: data.name,
         description: data.description,
         status: 'not-realized',
         created_At: new Date(),
      });

      return task;
   }

   async updateTaskServices(data: IUpdateTodo) {
      try {
         const taskModel = TaskModel;
         const searcherTask = await this.searcherTaskServices(data.id);

         if (searcherTask == null) {
            return { err: 'Task not found' };
         }

         await taskModel.updateOne(searcherTask, {
            name: data.name || searcherTask.name,
            description: data.description || searcherTask.description,
         });

         return { msg: 'Task Update' };
      } catch {
         return { err: 'Task not found' };
      }
   }

   async deleteTaskServices(id: string) {
      try {
         const taskModel = TaskModel;
         const searcherTask = await this.searcherTaskServices(id);

         if (searcherTask == null) {
            return { err: 'Task not found' };
         }

         await taskModel.deleteOne(searcherTask);

         return { msg: 'deleted' };
      } catch {
         return { err: 'Task not found' };
      }
   }

   private async searcherTaskServices(id: string) {
      const taskModel = TaskModel;
      return taskModel.findById(id);
   }
}();
