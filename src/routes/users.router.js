const usersRouter = require('express').Router();

const { readAllUsers, readUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

usersRouter.get('/', readAllUsers);
usersRouter.get('/:idUser', readUser);
usersRouter.post('/', createUser);
usersRouter.patch('/:idUser', updateUser);
usersRouter.delete('/:idUser', deleteUser);

module.exports = usersRouter;
