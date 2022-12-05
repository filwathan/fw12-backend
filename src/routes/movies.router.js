const moviesRouter = require('express').Router();

const {allMovies, singleMovie, createMovie, updateMovie, deleteMovie, nowShowingMovie} = require('../controllers/movies.controller');


moviesRouter.get('/', allMovies);
moviesRouter.get('/nowShowingMovie', nowShowingMovie);
moviesRouter.get('/:idMovie', singleMovie);
moviesRouter.post('/', createMovie);
moviesRouter.patch('/:idMovie', updateMovie);
moviesRouter.delete('/:idMovie', deleteMovie);

module.exports = moviesRouter
