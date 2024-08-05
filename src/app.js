const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db/conecctionBD');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes')

const app = express();
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/login',loginRoutes)

sequelize.sync()
  .then(result => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Erro ao sincronizar com o banco de dados:', err);
  });

module.exports = app; // Certifique-se de exportar a instância do Express
