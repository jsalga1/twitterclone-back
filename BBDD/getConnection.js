"use strict"

const mysql = require('mysql2/promise');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
async function getDB() {
    let pool;
    try {
        if (!pool) {
            pool = mysql.createPool({
                connectionLimit: 10,
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE,
                timezone: 'Z',
            })
        }
        return await pool.getConnection();
    } catch (error) {
        console.error(err);
        throw new Error('Error al conectar con MySQL');
    }
}

module.exports = getDB;