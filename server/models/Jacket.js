const { Schema, model } = require('mongoose');

// Schema to create Jacket model
const jacketSchema = new Schema(
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
      max_length: 10,
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

const Jacket = model('jacket', jacketSchema);

module.exports = Jacket;
