const mongoose = require('mongoose');

//change this after local testing, move to atlas
mongoose.connect('mongodb+srv://xIMX34SZ4hydssoz:xIMX34SZ4hydssoz@rapid-rentals.m81uyx1.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
