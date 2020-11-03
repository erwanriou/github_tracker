const app = require("./app")
const connect = require("./services/mongoDb")

// CONNECT DATABASE
connect("Github Tracker")

// STATIC ASSETS
if (process.env.NODE_ENV === "production") {
  app.enable("trust proxy")
  app.use(express.static("client/build", { maxAge: 31536000 }))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

// SERVER PORT
const port = process.env.PORT || 5000
const launchingQuote = `Github Tracker running on port ${port}`
app.listen(port, () => console.log(launchingQuote))
