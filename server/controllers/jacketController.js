const { Jacket } = require('../models');

module.exports = {
  // Get all jackets
  getJackets(req, res) {
    Jacket.find()
      .then((jacket) => res.json(jacket))
      .catch((err) => res.status(500).json(err));
  },
  // Get a jacket
  getSingleJacket(req, res) {
    Jacket.findOne({ _id: req.params.jacketId })
      .select('-__v')
      .then((jacket) =>
        !jacket
          ? res.status(404).json({ message: 'No jacket with that ID' })
          : res.json(jacket)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a jacket
  createJacket(req, res) {
    Jacket.create(req.body)
      .then((jacket) => res.json(jacket))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a jacket
  deleteJacket(req, res) {
    Jacket.findOneAndDelete({ _id: req.params.jacketId })
      .then((jacket) =>
        !jacket
          ? res.status(404).json({ message: 'No jacket with that ID' })
          : Jacket.deleteMany({ _id: { $in: jacket.jackets } })
      )
      .then(() => res.json({ message: 'Jacket deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a jacket
  updateJacket(req, res) {
    Jacket.findOneAndUpdate(
      { _id: req.params.jacketId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((jacket) =>
        !jacket
          ? res.status(404).json({ message: 'No jacket with this id!' })
          : res.json(jacket)
      )
      .catch((err) => res.status(500).json(err));
  },
};
