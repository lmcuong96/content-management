const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Kiểm tra nếu JWT_SECRET không được định nghĩa
if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined');
    process.exit(1);  // Dừng chương trình nếu không có secret
}


const login = async (req, res) => {
    const {email, password} = req.body;

    // Kiểm tra xem email và password có được cung cấp không
    if (!email || !password) {
        return res.status(400).json({message: 'Email and password are required'});
    }

    try {
        // Tìm kiếm user trong cơ sở dữ liệu
        const user = await User.findOne({where: {email}});

        // Kiểm tra xem user có tồn tại không
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        // Kiểm tra mật khẩu
        const isMatch = await user.checkPassword(password);
        if (!isMatch) {
            return console.log('Invalid password');
        }

        // Tạo JWT token
        const token = jwt.sign(
            {
                role: user.role,
                userId: user.id
            },
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );

        return res.status(200).json({message: 'Login successful', token});

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({message: 'Error during login', error: error.message});
    }
};

const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        let {role} = req.body

        // Kiểm tra dữ liệu đầu vào
        if (!name || !email || !password) {
            return res.status(400).json({message: 'Name, email, and password are required!'});
        }

        // Kiểm tra xem có role hay không
        if (!role) {
            role = 'user';
        }

        // Kiểm tra nếu email đã tồn tại
        const existingUser = await User.findOne({where: {email}});
        if (existingUser) {
            return res.status(400).json({message: 'User with this email already exists!'});
        }
        const user = await User.create({name, email, password, role});
        res.status(201).json({message: 'User created successfully!', user});
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({message: 'Error creating user', error: error.message});
    }
};
module.exports = {login, register};