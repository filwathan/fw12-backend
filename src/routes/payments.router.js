const paymentRouter = require('express').Router();

const {allPayments, singlePayment, createPayment, updatePayment, deletePayment} = require('../controllers/payments.contoller')

paymentRouter.get('/', allPayments);
paymentRouter.get('/:idPayment', singlePayment);
paymentRouter.post('/', createPayment);
paymentRouter.patch('/:idPayment', updatePayment);
paymentRouter.delete('/:idPayment', deletePayment);

module.exports = paymentRouter;
