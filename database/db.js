import { Sequelize } from 'sequelize';

// Configuramos la conexión a la base de datos
const db = new Sequelize('u742358870_database_app', 'u742358870_julian', 'Aa27462582', {
  host: '185.211.7.205',
  dialect: 'mysql',
});

export default db;
