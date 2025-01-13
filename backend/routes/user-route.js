const express = require('express');

const {getAllUsers, updateUser, deleteUser} = require('../controllers/user-controller');

const router = express.Router();

router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router