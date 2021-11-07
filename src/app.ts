import express from 'express';
import morgan from 'morgan';
import path from 'path'

import indexRoutes from './routes/index'

const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev')); //me muestra mensajes por consola a medida que el cliente pide cosas
app.use(express.json());

//routes
app.use('/api', indexRoutes);

//this folder for this application will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads'))); //path.resolve -> te da el directorio de una carpeta desde el inicio de un directorio.

export default app;