import express from 'express';
import itemRoutes from './routes/itemRoutes.js';
import userRoutes from './routes/userRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import { authValidator } from './middlewares/authValidator.js';


const api = express();
api.use(express.json());
api.use(morgan('tiny'))
 
api.get('/status', (_, res) => {
 res.json({
   msg: 'API En linea funcionado',
 });
});

//TODO: registrar rutas del sistema

api.use(authRoutes)
//api.use(authValidator)// lo ponemos aqui para que afecte a TODAS las rutas de aqui para abajo
api.use(itemRoutes);
api.use(userRoutes);
api.use("/tickets",authValidator,ticketRoutes); // el "/tickets" es el prefijo que llevan todas las rutas de items, es una fiorma dde ponerlo
// le asigne authValidator a 5odas las rutas de tickets

export default api;
 
