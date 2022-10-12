const express = require('express');

// Controllers
const {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	login,
	checkToken
} = require('../controllers/users.controller');

// Middlewares
const {
	createUserValidators,
} = require('../middlewares/validators.middleware');
const { userExists } = require('../middlewares/users.middleware');
const {
	protectSession,
	protectUserAccount,
	adminUserAccount
} = require('../middlewares/auth.middleware');

const usersRouter = express.Router();

usersRouter.post('/login', login);

usersRouter.use(protectSession);

usersRouter.post('/', createUserValidators, createUser);

usersRouter.get('/', getAllUsers);

usersRouter.get('/check-token', checkToken);

usersRouter
	.use('/:id', userExists)
	.route('/:id')
	.get(getUserById)
	.patch( protectUserAccount, updateUser)
	.delete( deleteUser);

module.exports = { usersRouter };
