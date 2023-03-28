const { DataTypes } = require('sequelize');
const { dataBase } = require('../database/config');


const UserRepairs = dataBase.define('user',{
    id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    date:{
        allowNull:false,
        type:DataTypes.STRING
    },
    status:{
        allowNull:false,
        type:DataTypes.ENUM('pending' | ' completed' |  'cancelled'),
        defaultValue: 'pending'
    },
    userId:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    }
})

module.exports = UserRepairs