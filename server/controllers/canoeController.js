const { canoe } = require('../server/models');

module.exports = {
  // Get all canoe
  getCanoe(req, res) {
    Canoe.find()
      .then((canoe) => res.json(canoe))
      .catch((err) => res.status(500).json(err));
  },
  // Get a canoe
  getSingleCanoe(req, res) {
    Canoe.findOne({ _id: req.params.canoeId })
      .select('-__v')
      .then((canoe) =>
        !canoe
          ? res.status(404).json({ message: 'No canoe with that ID' })
          : res.json(canoe)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a canoe
  createCanoe(req, res) {
    Canoe.create(req.body)
      .then((canoe) => res.json(canoe))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a canoe
  deleteCanoe(req, res) {
    Canoe.findOneAndDelete({ _id: req.params.canoeId })
      .then((canoe) =>
        !canoe
          ? res.status(404).json({ message: 'No canoe with that ID' })
          : Student.deleteMany({ _id: { $in: canoe.students } })
      )
      .then(() => res.json({ message: 'Canoe deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a canoe
  updateCanoe(req, res) {
    Canoe.findOneAndUpdate(
      { _id: req.params.canoeId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((canoe) =>
        !canoe
          ? res.status(404).json({ message: 'No canoe with this id!' })
          : res.json(canoe)
      )
      .catch((err) => res.status(500).json(err));
  },
};
