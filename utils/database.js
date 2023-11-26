// Archivo de prueba de conexion a DB con el ORM
const debug = require('debug')('app:module-config-database');
const { Sequelize } = require('sequelize');
const { Config } = require('./config');
const { host, port, user, password, database } = Config.db;

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres'
});

const conexionTest = async () => {
    try {
        await sequelize.authenticate();
        debug('Connection has been established successfully.');
    } catch (error) {
        debug('Unable to connect to the database:', error);
    }
}

conexionTest();