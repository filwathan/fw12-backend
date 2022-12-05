const locationRouter = require('express').Router();

const {allLocations, singleLocation, createLocation, updateLocation, deleteLocation} = require('../controllers/locations.contoller')

locationRouter.get('/', allLocations);
locationRouter.get('/:idLocation', singleLocation);
locationRouter.post('/', createLocation);
locationRouter.patch('/:idLocation', updateLocation);
locationRouter.delete('/:idLocation', deleteLocation);

module.exports = locationRouter;
