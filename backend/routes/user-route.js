const express = require('express');

const {getAllUsers, updateUser, deleteUser,getUser} = require('../controllers/user-controller');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router