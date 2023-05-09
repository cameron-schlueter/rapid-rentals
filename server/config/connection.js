const mongoose = require('mongoose');

//change this after local testing, move to atlas
mongoose.connect('mongodb://127.0.0.1:27017/rapid-rentalsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
