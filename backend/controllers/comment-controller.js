const Comment = require('../models/comment');
const User = require("../models/user");
const createComment = async (req, res) => {
    try {
        const {content, userId, contentId} = req.body;
        const createDate = new Date();
        const comment = await Comment.create({content, userId, contentId, createDate});
        res.status(201).json({message: 'Comment created successfully!', comment});
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({message: 'Error creating comment', error: error.message});
    }
};

const getAllComments= async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({message: 'Error fetching comments', error: error.message});
    }
};

module.exports = {createComment,getAllComments};