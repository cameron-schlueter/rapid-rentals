const router = require('express').Router();
const {
  getCanoes,
  getSingleCanoe,
  createCanoe,
  updateCanoe,
  deleteCanoe,
} = require('../../controllers/canoeController');

// /api/canoes
router.route('/').get(getCanoes).post(createCanoe);

// /api/canoes/:canoeId
router
  .route('/:canoeId')
  .get(getSingleCanoe)
  .put(updateCanoe)
  .delete(deleteCanoe);

module.exports = router;
