import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
   name: { type: String, required: true },
   description: { type: String, required: true },
   status: { type: String, required: true },
   created_At: { type: Date, required: true },
});

export default model('task', TaskSchema);
