const express = require('express')

const {getAllContentsWithComments, createContent, updateContent, deleteContent} = require('../controllers/content-controller');

const router = express.Router();

router.get('/', getAllContentsWithComments);
router.post('/', createContent);
router.put('/:id', updateContent);
router.delete('/:id', deleteContent);

module.exports = router
