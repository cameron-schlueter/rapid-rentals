const connection = require('../config/connection');
const { Canoe } = require('../models');
const { Paddle } = require('../models');
const { Jacket } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing canoes
  await Canoe.deleteMany({});
  
});
