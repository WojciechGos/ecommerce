// Update with your config settings.
require('dotenv').config({ path: '../../../.env' })
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    production: {
        client: 'postgresql',
        connection: {
            host: process.env.AWS_HOST,
            port: process.env.AWS_PORT,
            user: process.env.AWS_USER_NAME,
            password: process.env.AWS_USER_PASSWORD,
            database: process.env.AWS_DATABASE,
        },
        pool: {
            min: 2,
            max: 10
        }
    },
    development: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: '.',
            database: 'ecommerce'
        },
        seed: {
            directory: './seeds'
        },
        migrations: {
            directory: './migrations'
        }
    }
};
