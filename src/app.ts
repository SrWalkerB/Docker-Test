import dotenv from 'dotenv';
import express from 'express';
import connectionDB from './database/connect';
import routes from './routes';

dotenv.config();

const app = express();

connectionDB().then((resp) => app.emit(resp));

app.use(express.json());

app.use(routes);

export default app;
