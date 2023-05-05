// 5/2/23 just a boilerplace you are good to edit

const { Schema, model } = require('mongoose');

// Schema to create Canoe model
const canoeSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Canoe = model('canoe', canoeSchema);

module.exports = Canoe;
