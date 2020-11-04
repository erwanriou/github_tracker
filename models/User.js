const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  login: {
    type: String
  },
  id: {
    type: String
  },
  node_id: {
    type: String
  },
  repos_url: {
    type: String
  },
  avatar_url: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model("users", UserSchema)
