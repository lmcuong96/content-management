const User = require('../models/user');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({message: 'Error fetching users', error: error.message});
    }
};

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({message: 'Error fetching user', error: error.message});
    }
}

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email, password} = req.body;

        // Tìm kiếm user trong database
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        // Kiểm tra xem nếu email đã tồn tại
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists!' });
        }

        // Cập nhật thống tin user
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;
        await user.save();
        res.status(200).json({message: 'User updated successfully!', user});
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({message: 'Error updating user', error: error.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params; // Lấy ID content từ URL
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        await user.destroy();
        res.status(200).json({message: `${user.name} deleted!`});
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({message: 'Error deleting user', error: error.message});
    }
};

module.exports = {
    getAllUsers,
    updateUser,
    deleteUser,
    getUser
};