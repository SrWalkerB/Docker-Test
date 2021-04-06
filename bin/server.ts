import app from '../src/app';

const PORT = 4560;

app.on('ready', () => {
   app.listen(PORT, () => console.log(`Servidor rodando, PORT: ${PORT}`));
});
