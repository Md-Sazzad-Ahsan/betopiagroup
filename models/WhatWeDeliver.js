const mongoose = require('mongoose');

const WhatWeDeliverSchema = new mongoose.Schema({
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
  cards: [{
    heading: {
      type: String,
      required: true,
      trim: true
    },
    subHeadings: [{
      type: String,
      required: true,
      trim: true
    }]
  }],
  note: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('WhatWeDeliver', WhatWeDeliverSchema);
