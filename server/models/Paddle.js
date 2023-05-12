const { Schema, model } = require('mongoose');

// Schema to create Paddle model
const paddleSchema = new Schema(
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
      max_length: 20,
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

const Paddle = model('paddle', paddleSchema);

module.exports = Paddle;
