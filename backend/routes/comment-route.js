const express = require('express')

const {createComment,getAllComments} = require('../controllers/comment-controller')

const router = express.Router()

router.get('/', getAllComments)
router.post('/', createComment)


module.exports = router