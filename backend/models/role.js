const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db-config');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    name: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: false,
});

module.exports = Role