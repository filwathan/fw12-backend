const moviesCastsRouter = require('express').Router();

const {allMoviesCasts, singleMoviesCasts, createMoviesCasts, updateMoviesCasts, deleteMoviesCasts} = require('../controllers/moviesCasts.controller')

moviesCastsRouter.get('/', allMoviesCasts);
moviesCastsRouter.get('/:idMoviesCast', singleMoviesCasts);
moviesCastsRouter.post('/', createMoviesCasts);
moviesCastsRouter.patch('/:idMoviesCast', updateMoviesCasts);
moviesCastsRouter.delete('/:idMoviesCast', deleteMoviesCasts);

module.exports = moviesCastsRouter;
