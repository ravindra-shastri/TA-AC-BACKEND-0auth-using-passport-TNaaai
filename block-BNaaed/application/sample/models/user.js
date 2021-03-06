var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    github: {
      name: { type: String, required: true },
      username: { type: String, required: true, unique: true },
      email: { type: String, unique: true },
      photo: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);