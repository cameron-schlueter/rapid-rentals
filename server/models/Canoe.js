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
      type: Date,
      required: true,
      max_length: 86400,
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
