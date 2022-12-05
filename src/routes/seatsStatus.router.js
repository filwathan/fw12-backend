const seatStatusRouter = require('express').Router();

const {allSeatsStatus, singleSeatStatus, createSeatStatus, updateSeatStatus, deleteSeatStatus} = require('../controllers/seatsStatus.contoller')

seatStatusRouter.get('/', allSeatsStatus);
seatStatusRouter.get('/:idSeatStatus', singleSeatStatus);
seatStatusRouter.post('/', createSeatStatus);
seatStatusRouter.patch('/:idSeatStatus', updateSeatStatus);
seatStatusRouter.delete('/:idSeatStatus', deleteSeatStatus);

module.exports = seatStatusRouter;
