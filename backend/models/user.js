const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db-config');
const bcrypt = require('bcrypt');
const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,  // Role bắt buộc phải có
    }
}, {
    timestamps: false,
    hooks: {
        // Hash password before creating a new user
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10); // Tạo salt
            user.password = await bcrypt.hash(user.password, salt); // Hash password
        },
        // Hash password before updating a user
        beforeUpdate: async (user) => {
            if (user.changed('password')) { // Chỉ hash nếu password thay đổi
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
    },
})

// Phương thức kiểm tra mật khẩu
User.prototype.checkPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = User