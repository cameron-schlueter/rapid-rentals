// 5/2/23 just a boilerplace you are good to edit

const { Schema, model } = require('mongoose');

// Schema to create Canoe model
const canoeSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      max_length: 50,
    },
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    stock: {
      type: String,
      required: true,
      max_length: 50,
    },
    pricing: {
      type: String,
      required: true,
      max_length: 50,
    },
    time: {
      type: String,
      required: true,
      max_length: 50,
    },
    location: {
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
