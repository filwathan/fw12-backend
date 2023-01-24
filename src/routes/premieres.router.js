const premierRouter = require('express').Router();

const {allPremieres, singlePremiere, createPremiere, updatePremiere, deletePremiere, premiereLocationByMovie} = require('../controllers/premieres.controller')

premierRouter.get('/', allPremieres);
premierRouter.get('/premiereLocationByMovie/:idMovie', premiereLocationByMovie);
premierRouter.get('/:idPremiere', singlePremiere);
premierRouter.post('/', createPremiere);
premierRouter.patch('/:idPremiere', updatePremiere);
premierRouter.delete('/:idPremiere', deletePremiere);

module.exports = premierRouter;
