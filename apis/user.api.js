const { addUser, getUsers } = require('../services/user.service');
const { upload } = require('../utils/upload');

const router = require('express').Router();

router.post('/', upload('excel'), addUser)
router.get('/', getUsers)



module.exports = router