const castRouter = require('express').Router();

const {allCasts, singleCast, createCast, updateCast, deleteCast} = require('../controllers/casts.contoller')

castRouter.get('/', allCasts);
castRouter.get('/:idCast', singleCast);
castRouter.post('/', createCast);
castRouter.patch('/:idCast', updateCast);
castRouter.delete('/:idCast', deleteCast);

module.exports = castRouter;
