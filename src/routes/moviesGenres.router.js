const moviesGenresRouter = require('express').Router();

const {allMoviesGenres, singleMoviesGenres, createMoviesGenres, updateMoviesGenres, deleteMoviesGenres} = require('../controllers/moviesGenres.controller')

moviesGenresRouter.get('/', allMoviesGenres);
moviesGenresRouter.get('/:idMoviesGenre', singleMoviesGenres);
moviesGenresRouter.post('/', createMoviesGenres);
moviesGenresRouter.patch('/:idMoviesGenre', updateMoviesGenres);
moviesGenresRouter.delete('/:idMoviesGenre', deleteMoviesGenres);

module.exports = moviesGenresRouter;
