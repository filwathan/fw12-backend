const usersRouter = require('express').Router();

const { readAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

usersRouter.get('/', readAllUsers);
usersRouter.post('/', createUser);
usersRouter.patch('/', updateUser);
usersRouter.delete('/', deleteUser);

module.exports = usersRouter;
