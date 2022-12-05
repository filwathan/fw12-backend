const moviesPremieresRouter = require('express').Router();

const {allMoviesPremieres, singleMoviesPremieres, createMoviesPremieres, updateMoviesPremieres, deleteMoviesPremieres} = require('../controllers/moviesPremieres.controller')

moviesPremieresRouter.get('/', allMoviesPremieres);
moviesPremieresRouter.get('/:idMoviePremiere', singleMoviesPremieres);
moviesPremieresRouter.post('/', createMoviesPremieres);
moviesPremieresRouter.patch('/:idMoviePremiere', updateMoviesPremieres);
moviesPremieresRouter.delete('/:idMoviePremiere', deleteMoviesPremieres);

module.exports = moviesPremieresRouter;
