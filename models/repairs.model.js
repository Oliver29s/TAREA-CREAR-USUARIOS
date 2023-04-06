const { DataTypes } = require('sequelize');
const { dataBase } = require('../database/config');


const repairs = dataBase.define('user',{
    id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
        
    },
    status:{
        allowNull:false,
        type:DataTypes.ENUM('pending' , 'completed' ,  'cancelled'),
        defaultValue: 'pending'
    },
    userId:{
        allowNull: false,
        type: DataTypes.INTEGER,
    }
})

module.exports = repairs