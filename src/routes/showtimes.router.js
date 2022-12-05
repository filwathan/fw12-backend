const showtimeRouter = require('express').Router();

const {allShowtimes, singleShowtime, createShowtime, updateShowtime, deleteShowtime} = require('../controllers/showtimes.contoller')

showtimeRouter.get('/', allShowtimes);
showtimeRouter.get('/:idShowtime', singleShowtime);
showtimeRouter.post('/', createShowtime);
showtimeRouter.patch('/:idShowtime', updateShowtime);
showtimeRouter.delete('/:idShowtime', deleteShowtime);

module.exports = showtimeRouter;
