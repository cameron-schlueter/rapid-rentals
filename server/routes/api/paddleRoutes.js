const router = require('express').Router();
const {
  getPaddles,
  getSinglePaddle,
  createPaddle,
  updatePaddle,
  deletePaddle,
} = require('../../controllers/paddleController');

// /api/paddles
router.route('/').get(getPaddles).post(createPaddle);

// /api/paddles/:paddleId
router
  .route('/:paddleId')
  .get(getSinglePaddle)
  .put(updatePaddle)
  .delete(deletePaddle);

module.exports = router;
