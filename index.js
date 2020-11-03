const app = require("./app")
const connect = require("./services/mongoDb")

// CONNECT DATABASE
connect("Github Tracker")

// SERVER PORT
const port = process.env.PORT || 5000
const launchingQuote = `Github Tracker running on port ${port}`
app.listen(port, () => console.log(launchingQuote))
