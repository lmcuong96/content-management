const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db-config');
const User = require('./user');
const Content = sequelize.define('Content', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brief: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updateDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = Content;