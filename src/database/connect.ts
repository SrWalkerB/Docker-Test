import mongoose from 'mongoose';

const connectionDB = () => mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => 'ready');

export default connectionDB;
