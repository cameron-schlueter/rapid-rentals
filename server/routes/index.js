const router = require('express').Router();
const apiRoutes = require('./api');
const book = require('../controllers/bookingController')

router.route('/booking').post(book.BookingController)

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
