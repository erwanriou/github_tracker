const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const RepoSchema = new Schema({
  name: {
    type: String
  },
  id: {
    type: String
  },
  node_id: {
    type: String
  },
  url: {
    type: String
  },
  description: {
    type: String
  },
  watchers: {
    type: String
  },
  forks: {
    type: String
  },
  language: {
    type: String
  },
  updated_at: {
    type: Date
  },
  created_at: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Repo = mongoose.model("repositories", RepoSchema)
