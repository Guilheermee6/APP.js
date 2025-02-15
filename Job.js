const Sequelize = require('sequelizer')
const db = require('./db/connection.js')

const Job = db.define('job', {
    title: {
        type: Sequelize.STRING,
    },
    discirption: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
})

module.exports = Job