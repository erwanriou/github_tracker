const mongoose = require("mongoose")
const db = require("../config/keys").keys

module.exports = async client => {
  try {
    // CONNECT MONGOOSE
    await mongoose.connect(db.mongo.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log(`${client} Mongodb Connected`)
  } catch (e) {
    console.error(e)
  }
}
