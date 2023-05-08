// 5/2/23 just a boilerplace you are good to edit

const router = require('express').Router();
const {
  getCanoes,
  getSingleCanoe,
  createCanoe,
  updateCanoe,
  deleteCanoe,
} = require('../../../controllers/canoeController.js');

// /api/canoes
router.route('/').get(getCanoes).post(createCanoe);

// /api/canoes/:canoeId
router
  .route('/:canoeId')
  .get(getSingleCanoe)
  .put(updateCanoe)
  .delete(deleteCanoe);

module.exports = router;
