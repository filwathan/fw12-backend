const seatRouter = require('express').Router();

const {allSeats, singleSeat, createSeat, updateSeat, deleteSeat} = require('../controllers/seats.contoller')

seatRouter.get('/', allSeats);
seatRouter.get('/:idSeat', singleSeat);
seatRouter.post('/', createSeat);
seatRouter.patch('/:idSeat', updateSeat);
seatRouter.delete('/:idSeat', deleteSeat);

module.exports = seatRouter;
