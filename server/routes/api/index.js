const router = require('express').Router();
const canoeRoutes = require('./canoeRoutes');
const paddleRoutes = require('./paddleRoutes');
const jacketRoutes = require('./jacketRoutes');


router.use('/canoes', canoeRoutes);
router.use('/paddles', paddleRoutes);
router.use('/jackets', jacketRoutes);

module.exports = router;
