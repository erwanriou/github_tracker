const keys = {
  pipeline: {
    env: process.env.PIPELINE_ENV
  },
  mongo: {
    url: process.env.MONGO_URI
  }
}

exports.keys = keys
