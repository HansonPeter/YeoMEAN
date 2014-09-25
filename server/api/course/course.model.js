'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
  name: String,
  grade: String,
  gradePoints: Number,
  credits: Number
});

module.exports = mongoose.model('Course', CourseSchema);