const routes = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');


routes.use('/users', authMiddleware, require('./users.router'));
routes.use('/genres',authMiddleware, require('./genres.router'));
routes.use('/movies', require('./movies.router'));
routes.use('/moviesGenres', authMiddleware, require('./moviesGenres.router'));
routes.use('/casts', authMiddleware, require('./casts.router'));
routes.use('/moviesCasts', authMiddleware, require('./moviesCasts.router'));
routes.use('/premieres', authMiddleware, require('./premieres.router'));
routes.use('/moviesPremieres', authMiddleware, require('./moviesPremieres.router'));
routes.use('/locations', authMiddleware, require('./locations.router'));
routes.use('/premieresLocations', authMiddleware, require('./premieresLocations.router'));
routes.use('/showtimes', authMiddleware, require('./showtimes.router'));
routes.use('/moviesShowtimes', authMiddleware, require('./moviesShowtimes.router'));
routes.use('/seats', authMiddleware, require('./seats.router'));
routes.use('/seatsStatus', authMiddleware, require('./seatsStatus.router'));
routes.use('/payments', authMiddleware, require('./payments.router'));
routes.use('/ordersStatus', authMiddleware, require('./ordersStatus.router'));
routes.use('/orders', authMiddleware, require('./orders.router'));

routes.use('/resetPasswords', require('./resetPasswords.router'));

routes.use('/auth', require('./auth.router'));

module.exports = routes
