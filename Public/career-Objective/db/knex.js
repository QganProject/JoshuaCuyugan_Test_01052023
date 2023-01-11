const knex = require('knex');

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "./Public/career-Objective/db/goals.db"
    }
});

module.exports = connectedKnex;