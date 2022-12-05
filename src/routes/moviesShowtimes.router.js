const moviesShowtimesRouter = require('express').Router();

const {allMoviesShowtimes, singleMoviesShowtimes, createMoviesShowtimes, updateMoviesShowtimes, deleteMoviesShowtimes} = require('../controllers/moviesShowtimes.controller')

moviesShowtimesRouter.get('/', allMoviesShowtimes);
moviesShowtimesRouter.get('/:idMoviesShowtime', singleMoviesShowtimes);
moviesShowtimesRouter.post('/', createMoviesShowtimes);
moviesShowtimesRouter.patch('/:idMoviesShowtime', updateMoviesShowtimes);
moviesShowtimesRouter.delete('/:idMoviesShowtime', deleteMoviesShowtimes);

module.exports = moviesShowtimesRouter;
