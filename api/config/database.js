// este archivo lo exporto y lo importo en server, ahi llamo a database()
import mongoose from 'mongoose';
import config from './index.js'; // importo todo con nombre config

const db = mongoose.connection;

db.on('connecting', () => { // son propiedades de moongoose.  cuando este intentando conectarse
  console.log('Conectando a la base de datos 🟡');
});

db.on('connected', () => {
  console.log('Se ha conectado a la base de datos 🟢');
});

db.on('error', () => {
  console.log('Error al conectarse a la base 🔴');
});

export default () => {
  mongoose.connect(config.database.uri);//esto lo saca de index.js
};