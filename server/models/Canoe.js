const { Schema, model } = require('mongoose');

// Schema to create Canoe model
const canoeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    stock: {
      type: Number,
      required: true,
      max_length: 50,
    },
    pricing: {
      type: Number,
      required: true,
      max_length: 100,
    },
    time: {
      type: Number,
      required: true,
      max_length: 1000,
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
