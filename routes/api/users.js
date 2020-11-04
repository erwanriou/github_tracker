const express = require("express")
const mongoose = require("mongoose")

// IMPORT MODELS
const User = require("../../models/User")

// DECLARE ROUTER
const router = express.Router()

// @route  GET api/users
// @desc   get the list of tracked users
// @access Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (e) {
    console.error(e)
  }
})

// @route  POST api/users
// @desc   save a user
// @access Public
router.post("/", async (req, res) => {
  try {
    const { login, id, node_id, repos_url, avatar_url, description } = req.body

    const user = new User({
      login,
      id,
      node_id,
      repos_url,
      avatar_url,
      description
    })
    await user.save()

    res.send(user)
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
