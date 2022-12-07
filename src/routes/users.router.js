const usersRouter = require('express').Router();
const uploadMiddleware = require('../middleware/upload.middleware')

const { readAllUsers, readUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

usersRouter.get('/', readAllUsers);
usersRouter.get('/:idUser', readUser);
usersRouter.post('/',uploadMiddleware, createUser);
usersRouter.patch('/:idUser',uploadMiddleware, updateUser);
usersRouter.delete('/:idUser', deleteUser);

module.exports = usersRouter;
