const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db-config');
const User = require('./user');
const Content = require('./content');
const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    content: {
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
    },
    contentId: {
        type: DataTypes.UUID,
        references: {
            model: Content,
            key: 'id',
        },
    },
}, {
    timestamps: false,
});
module.exports = Comment
