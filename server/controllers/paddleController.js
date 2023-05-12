const { Paddle } = require('../models');

module.exports = {
  // Get all paddles
  getPaddles(req, res) {
    Paddle.find()
      .then((paddle) => res.json(paddle))
      .catch((err) => res.status(500).json(err));
  },
  // Get a paddle
  getSinglePaddle(req, res) {
    Paddle.findOne({ _id: req.params.paddleId })
      .select('-__v')
      .then((paddle) =>
        !paddle
          ? res.status(404).json({ message: 'No paddle with that ID' })
          : res.json(paddle)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a paddle
  createPaddle(req, res) {
    Paddle.create(req.body)
      .then((paddle) => res.json(paddle))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a paddle
  deletePaddle(req, res) {
    Paddle.findOneAndDelete({ _id: req.params.paddleId })
      .then((paddle) =>
        !paddle
          ? res.status(404).json({ message: 'No paddle with that ID' })
          : Paddle.deleteMany({ _id: { $in: paddle.paddles } })
      )
      .then(() => res.json({ message: 'Paddle deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a paddle
  updatePaddle(req, res) {
    Paddle.findOneAndUpdate(
      { _id: req.params.paddleId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((paddle) =>
        !paddle
          ? res.status(404).json({ message: 'No paddle with this id!' })
          : res.json(paddle)
      )
      .catch((err) => res.status(500).json(err));
  },
};
