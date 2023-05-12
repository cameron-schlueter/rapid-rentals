const router = require('express').Router();
const {
  getJackets,
  getSingleJacket,
  createJacket,
  updateJacket,
  deleteJacket,
} = require('../../controllers/jacketController');

// /api/jackets
router.route('/').get(getJackets).post(createJacket);

// /api/jackets/:jacketId
router
  .route('/:jacketId')
  .get(getSingleJacket)
  .put(updateJacket)
  .delete(deleteJacket);

module.exports = router;
