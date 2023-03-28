const {Sequelize} = require('sequelize')

exports.db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    database:'crudusersdb',
    password:'Olivershore69',
    port: 5432,
    logging: false
})

exports.dataBase = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    database:'dbrepairs',
    password:'Olivershore69',
    port: 5432,
    logging: false
})




