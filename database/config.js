require('dotenv').config();

module.exports = {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "host": process.env.DBHOST,
    "port": process.env.DBPORT,
    "dialect": process.env.DBDIALECT,
    "database": process.env.DBNAME
}