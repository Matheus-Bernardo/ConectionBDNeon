/*
* Arquivo ilustrativo para validar a conexão com o banco de dados
* Caso queira testar, configure a URL do seu banco criado no Neon Database e execute este arquivo 
*/

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.CONNECTION_URL) {
    throw new Error('CONNECTION_URL não está definida nas variáveis de ambiente');
}

const sequelize = new Sequelize(process.env.CONNECTION_URL, {
    dialect: 'postgres',
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

