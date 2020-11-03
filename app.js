const express = require("express")
const helmet = require("helmet")
const compression = require("compression")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// IMPORT ROUTES
const routes = require("./routes")

// LAUNCH EXPRESS
const app = express()

// USE MAIN MIDDLWWARE
app.set("trust proxy", true)
app.use(helmet())
app.disable("x-powered-by")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(compression())

// USE ROUTES
routes.map(route => app.use(route.url, route.path))

module.exports = app
