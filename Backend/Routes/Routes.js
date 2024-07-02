const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const authMiddleware = require('../Middlewares/Middleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', authMiddleware, getUsers);

module.exports = router;
