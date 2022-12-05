const orderStatusRouter = require('express').Router();

const {allOrdersStatus, singleOrderStatus, createOrderStatus, updateOrderStatus, deleteOrderStatus} = require('../controllers/ordersStatus.contoller')

orderStatusRouter.get('/', allOrdersStatus);
orderStatusRouter.get('/:idOrderStatus', singleOrderStatus);
orderStatusRouter.post('/', createOrderStatus);
orderStatusRouter.patch('/:idOrderStatus', updateOrderStatus);
orderStatusRouter.delete('/:idOrderStatus', deleteOrderStatus);

module.exports = orderStatusRouter;
