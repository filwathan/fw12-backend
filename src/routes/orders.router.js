const orderRouter = require('express').Router();

const {allOrders, singleOrder, orderByUser, orderDetailsById, createOrder, updateOrder, deleteOrder} = require('../controllers/orders.contoller')

orderRouter.get('/', allOrders);
orderRouter.get('/byUser/:idUser', orderByUser);
orderRouter.get('/byIdOrder/:idOrder', orderDetailsById);
orderRouter.get('/:idOrder', singleOrder);
orderRouter.post('/', createOrder);
orderRouter.patch('/:idOrder', updateOrder);
orderRouter.delete('/:idOrder', deleteOrder);

module.exports = orderRouter;
