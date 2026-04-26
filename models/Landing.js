const mongoose = require('mongoose');

const LandingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  subTitle: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  buttonOne: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  buttonTwo: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Landing', LandingSchema);
