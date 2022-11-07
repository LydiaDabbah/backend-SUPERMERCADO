// este archivo va a tener todas las variables de entorno


import dotenv from 'dotenv';

dotenv.config();

export default {
  server: {
    port: process.env.PORT || 3000,// si no hay puerto en dotenv que se conecte al 3000. esto lo voy a importar en server
  },
  database: {
    uri: process.env.URI || 'mongodb://localhost/test',
  },
    jwtSecret: process.env.JWT_SECRET || 'mongodb://localhost/test',
};