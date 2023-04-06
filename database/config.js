const {Sequelize} = require('sequelize')

exports.db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    database:'crud1',
    password:'Olivershore69',
    port: 5432,
    logging: false
})

exports.dataBase = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    database:'repairdb',
    password:'Olivershore69',
    port: 5432,
    logging: false
})




