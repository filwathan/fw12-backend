const genreRouter = require('express').Router();

const {allGenres, singleGenre, createGenre, updateGenre, deleteGenre} = require('../controllers/genres.controller')

genreRouter.get('/', allGenres);
genreRouter.get('/:idGenre', singleGenre);
genreRouter.post('/', createGenre);
genreRouter.patch('/:idGenre', updateGenre);
genreRouter.delete('/:idGenre', deleteGenre);

module.exports = genreRouter;
