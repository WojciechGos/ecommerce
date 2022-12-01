const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD,
})


module.exports = {
    query : (text, params) => pool.query(text, params)
}