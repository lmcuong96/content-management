const Content = require('../models/content'); // Import mô hình Content từ models

const getAllContents = async (req, res) => {
    try {
        const contents = await Content.findAll();
        res.status(200).json(contents);
    } catch (error) {
        console.error('Error fetching contents:', error);
        res.status(500).json({message: 'Error fetching contents', error: error.message});
    }
};

const createContent = async (req, res) => {
    try {
        const { title, content, brief, userId } = req.body;

        // Kiểm tra dữ liệu đầu vào
        if (!title || !content || !brief || !userId) {
            return res.status(400).json({ message: 'Title, content, brief and userId are required!' });
        }

        // Kiểm tra nếu user đã có title này
        const existingContent = await Content.findOne({
            where: {
                title,
                userId, // Chỉ kiểm tra title trong phạm vi userId
            },
        });

        if (existingContent) {
            return res.status(400).json({ message: 'You already have content with this title!' });
        }

        // Tạo nội dung mới
        const newContent = await Content.create({
            title,
            content,
            brief,
            createDate: new Date(),
            userId
        });

        res.status(201).json({
            message: `${title} created successfully!`,
            newContent,
        });
    } catch (error) {
        console.error('Error creating content:', error);
        res.status(500).json({
            message: 'Error creating content',
            error: error.message,
        });
    }
};


// Cập nhật thông tin content
const updateContent = async (req, res) => {
    try {
        const {id} = req.params; // Lấy ID content từ URL
        const {title, content, brief,userId} = req.body;

        // Tìm kiếm content trong database
        const oldContent = await Content.findByPk(id);
        if (!oldContent) {
            return res.status(404).json({message: 'Content not found'});
        }

        // Kiểm tra nếu user đã có title này
        const existingContent = await Content.findOne({
            where: {
                title,
                userId,
            },
        });

        if (existingContent) {
            return res.status(400).json({ message: 'You already have content with this title!' });
        }

        // Cập nhật thống tin content
        oldContent.title = title || oldContent.title;
        oldContent.content = content || oldContent.content;
        oldContent.brief = brief || oldContent.brief;
        oldContent.updateDate = new Date();

        await oldContent.save();
        res.status(200).json({message: ` ${oldContent.title} updated!`, oldContent});
    } catch (error) {
        console.error('Error updating content:', error);
        res.status(500).json({message: 'Error updating content', error: error.message});
    }
};

// Xóa content
const deleteContent = async (req, res) => {
    try {
        const {id} = req.params; // Lấy ID content từ URL
        const content = await Content.findByPk(id);
        if (!content) {
            return res.status(404).json({message: 'Content not found'});
        }

        await content.destroy();
        res.status(200).json({message: `${content.title} deleted!`});
    } catch (error) {
        console.error('Error deleting content:', error);
        res.status(500).json({message: 'Error deleting content', error: error.message});
    }
};

module.exports = {
    getAllContents,
    createContent,
    updateContent,
    deleteContent
};
