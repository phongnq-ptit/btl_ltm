const { Sequelize } = require('sequelize');

/*// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});*/

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('BTL_N1', 'root', '', { // BTL_N1 la ten csdl
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});



module.exports = async function() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}