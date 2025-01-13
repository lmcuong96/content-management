const {Sequelize, DataTypes} = require('sequelize');

// Kết nối Sequelize với MSSQL
const sequelize = new Sequelize("content-management", "sa", "minhcuong", {
    host: "localhost",
    dialect: "mssql",
    dialectOptions: {
        options: {
            encrypt: true, // Sử dụng mã hóa nếu cần
        },
    },
});

module.exports = sequelize;