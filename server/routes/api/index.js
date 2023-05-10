const router = require('express').Router();
const canoeRoutes = require('./canoeRoutes');

router.use('/canoes', canoeRoutes);


module.exports = router;
