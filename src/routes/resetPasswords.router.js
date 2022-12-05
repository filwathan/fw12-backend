const resetPasswordRouter = require('express').Router();

const {allResetPasswords, singleResetPassword, createResetPassword, updateResetPassword, deleteResetPassword} = require('../controllers/resetPasswords.contoller')

resetPasswordRouter.get('/', allResetPasswords);
resetPasswordRouter.get('/:idResetPassword', singleResetPassword);
resetPasswordRouter.post('/', createResetPassword);
resetPasswordRouter.patch('/:idResetPassword', updateResetPassword);
resetPasswordRouter.delete('/:idResetPassword', deleteResetPassword);

module.exports = resetPasswordRouter;
