const express = require('express')

const {getAllContents, createContent, updateContent, deleteContent} = require('../controllers/content-controller');

const router = express.Router();

router.get('/', getAllContents);
router.post('/', createContent);
router.put('/:id', updateContent);
router.delete('/:id', deleteContent);

module.exports = router
