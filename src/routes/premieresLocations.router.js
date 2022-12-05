const premieresLocationsRouter = require('express').Router();

const {allPremieresLocations, singlePremieresLocations, createPremieresLocations, updatePremieresLocations, deletePremieresLocations} = require('../controllers/premieresLocations.controller')

premieresLocationsRouter.get('/', allPremieresLocations);
premieresLocationsRouter.get('/:idPremiereLocation', singlePremieresLocations);
premieresLocationsRouter.post('/', createPremieresLocations);
premieresLocationsRouter.patch('/:idPremiereLocation', updatePremieresLocations);
premieresLocationsRouter.delete('/:idPremiereLocation', deletePremieresLocations);

module.exports = premieresLocationsRouter;
