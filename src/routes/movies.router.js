const moviesRouter = require('express').Router();
const middlewareUpload = require('../middleware/upload.middleware')
const authMiddleware = require('../middleware/auth.middleware');

const {allMovies, allMoviesSemua, singleMovie, singleMovieDetail, createMovie, updateMovie, deleteMovie, nowShowingMovie, upcomingMovie} = require('../controllers/movies.controller');


moviesRouter.get('/', authMiddleware, allMovies);
moviesRouter.get('/semua', authMiddleware, allMoviesSemua);
moviesRouter.get('/nowShowingMovie', nowShowingMovie);
moviesRouter.get('/upcomingMovie', upcomingMovie);
moviesRouter.get('/detail/:idMovie', authMiddleware, singleMovieDetail);
moviesRouter.get('/:idMovie', authMiddleware, singleMovie);
moviesRouter.post('/', authMiddleware, createMovie);
moviesRouter.patch('/:idMovie', authMiddleware, middlewareUpload, updateMovie);
moviesRouter.delete('/:idMovie', authMiddleware, deleteMovie);

module.exports = moviesRouter
