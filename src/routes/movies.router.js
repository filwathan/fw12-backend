const moviesRouter = require('express').Router();
const uploadMiddleware = require('../middleware/upload.middleware')

const {allMovies, allMoviesSemua, singleMovie, singleMovieDetail, createMovie, updateMovie, deleteMovie, nowShowingMovie, upcomingMovie} = require('../controllers/movies.controller');


moviesRouter.get('/', allMovies);
moviesRouter.get('/semua', allMoviesSemua);
moviesRouter.get('/nowShowingMovie', nowShowingMovie);
moviesRouter.get('/upcomingMovie', upcomingMovie);
moviesRouter.get('/detail/:idMovie', singleMovieDetail);
moviesRouter.get('/:idMovie', singleMovie);
moviesRouter.post('/', createMovie);
moviesRouter.patch('/:idMovie', uploadMiddleware, updateMovie);
moviesRouter.delete('/:idMovie', deleteMovie);

module.exports = moviesRouter
