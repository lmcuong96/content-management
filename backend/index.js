const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Connect to database
const sequelize = require('./config/db-config');
sequelize
    .sync()
    .then((result) => result)
    .catch((e) => console.log(e));
// Middleware để parse JSON
app.use(express.json());

// Thêm middleware xác thực token
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied, token missing!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token!' });
        }
        req.user = decoded;
        next();
    });
};

// Middleware kiểm tra quyền người dùng
const authorizeRole = (requiredRole) => {
    return (req, res, next) => {
        if (req.user.role !== requiredRole) {
            return res.status(403).json({ message: 'Access denied, insufficient permissions!' });
        }
        next();
    };
};

// Routes
const contentRoute = require('./routes/content-route');
app.use('/content', contentRoute);

const userRoute = require('./routes/user-route');
// app.use('/user', authenticateToken, authorizeRole('admin'), userRoute);
app.use('/user', userRoute);


const authRoute = require('./routes/auth-route');
app.use('/auth', authRoute);

const commentRoute = require('./routes/comment-route');
app.use('/comment', commentRoute);

// Models
const User = require('./models/user');
const Content = require('./models/content');
const Role = require('./models/role');
const Comment = require('./models/comment');
// Thiết lập quan hệ giữa các bảng
User.hasMany(Content, { foreignKey: 'userId', onDelete: 'CASCADE' });
Content.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.belongsTo(Role, { foreignKey: 'role', onDelete: 'CASCADE' });
Role.hasOne(User, { foreignKey: 'role', onDelete: 'CASCADE' });
// models/content.js
Content.hasMany(Comment, { foreignKey: 'contentId', onDelete: 'CASCADE' });
Comment.belongsTo(Content, { foreignKey: 'contentId' });

// models/comment.js
Comment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Comment, { foreignKey: 'userId' });

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
