const moviesRouter = require('express').Router();
const uploadMiddleware = require('../middleware/upload.middleware')

const {allMovies, singleMovie, createMovie, updateMovie, deleteMovie, nowShowingMovie} = require('../controllers/movies.controller');


moviesRouter.get('/', allMovies);
moviesRouter.get('/nowShowingMovie', nowShowingMovie);
moviesRouter.get('/:idMovie', singleMovie);
moviesRouter.post('/', createMovie);
moviesRouter.patch('/:idMovie', uploadMiddleware, updateMovie);
moviesRouter.delete('/:idMovie', deleteMovie);

module.exports = moviesRouter
