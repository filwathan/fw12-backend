const routes = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');


routes.use('/users', require('./users.router'));
routes.use('/genres', require('./genres.router'));
routes.use('/movies',authMiddleware, require('./movies.router'));
routes.use('/moviesGenres', require('./moviesGenres.router'));
routes.use('/casts', require('./casts.router'));
routes.use('/moviesCasts', require('./moviesCasts.router'));
routes.use('/premieres', require('./premieres.router'));
routes.use('/moviesPremieres', require('./moviesPremieres.router'));
routes.use('/locations', require('./locations.router'));
routes.use('/premieresLocations', require('./premieresLocations.router'));
routes.use('/showtimes', require('./showtimes.router'));
routes.use('/moviesShowtimes', require('./moviesShowtimes.router'));
routes.use('/seats', require('./seats.router'));
routes.use('/seatsStatus', require('./seatsStatus.router'));
routes.use('/payments', require('./payments.router'));
routes.use('/ordersStatus', require('./ordersStatus.router'));
routes.use('/orders', require('./orders.router'));

routes.use('/resetPasswords', require('./resetPasswords.router'));

routes.use('/auth', require('./auth.router'));

module.exports = routes
