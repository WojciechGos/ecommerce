const { Model } = require("objection");
const knex = require('../knexfile')
Model.knex(knex)
class Address extends Model {
    static get tableName() {
        return "address";
    }
}

module.exports = Address