const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Models
const { User } = require('../models/user.model');
// const { Post } = require('../models/post.model');
// const { Comment } = require('../models/comment.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

// Gen secrets for JWT, require('crypto').randomBytes(64).toString('hex')

dotenv.config({ path: './config.env' });

const getAllUsers = catchAsync(async (req, res, next) => {
	// const users = await User.findAll({
	// 	include: [
	// 		{ model: Post, include: { model: Comment, include: User } },
	// 		{ model: Comment },
	// 	],
	// });
	const users = await User.find({ status: 'active' }, '-password')

	res.status(200).json({
		status: 'success',
		users,
	});
});

const createUser = catchAsync(async (req, res, next) => {
	const { sessionUser, user } = req;
	const { name, email, password, role, address, phoneNumber} = req.body;


	const userExists = await User.findOne({ email });

	if (userExists) {
		return next(new AppError('Email already taken', 400));
	}
	
//how to make a form responsive?

	// Hash password
	const salt = await bcrypt.genSalt(12);
	const hashPassword = await bcrypt.hash(password, salt);
	
	if(sessionUser.role === 'admin'){
	const newUser = await User.create({
		name,
		email,
		password: hashPassword,
		role,
		address,
		phoneNumber
	});

	// Remove password from response
	newUser.password = undefined;

	// Send welcome email
	// await new Email(email).sendWelcome(name);

	res.status(201).json({
		status: 'success',
		newUser,
	});
}});

const getUserById = catchAsync(async (req, res, next) => {
	const { user } = req;

	res.status(200).json({
		status: 'success',
		user,
	});
});

const updateUser = catchAsync(async (req, res, next) => {
	const { sessionUser, user } = req;
	const { name, email, address, phoneNumber, password, role } = req.body;

	if(sessionUser.role === "admin" && (sessionUser.id != user.id)){
		await user.update({ name, email, address, phoneNumber, password, role });
	
   res.status(204).json({ status: 'success' }); 
}
else{ return next(new AppError('Unauthorized', 403)); }
});




const deleteUser = catchAsync(async (req, res, next) => {

	const { user, sessionUser } = req;

	if(sessionUser.role === "admin" && (sessionUser.id != user.id)){
		await user.update({ status: 'deleted' });
	
   res.status(204).json({ status: 'success' }); 
}
else{ return next(new AppError('Unauthorized', 403)); }
   

   
});

const login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	// Validate credentials (email)
	const user = await User.findOne({
		email,
		status: 'active',
	});

	if (!user) {
		return next(new AppError('Credentials invalid', 400));
	}

	// Validate password
	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) {
		return next(new AppError('Credentials invalid', 400));
	}

	// Generate JWT (JsonWebToken) ->
	const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});

	// Send response
	res.status(200).json({
		status: 'success',
		token,
		user,
	});
});

const checkToken = catchAsync(async (req, res, next) => {
	const { sessionUser } = req;

	res.status(200).json({
		status: 'success',
		user: sessionUser,
	});
});

module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	login,
	checkToken
};
