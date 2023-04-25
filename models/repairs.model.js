const { DataTypes } = require('sequelize');
const { db } = require('../database/config');


const Repairs = db.define('repair', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  motorsNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  date: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: new Date(),
  },
  status: {
    allowNull: false,
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending',
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

module.exports = Repairs;
