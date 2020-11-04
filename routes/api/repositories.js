const express = require("express")
const mongoose = require("mongoose")

// IMPORT MODELS
const Repo = require("../../models/Repository")

// DECLARE ROUTER
const router = express.Router()

// @route  GET api/users
// @desc   get the list of tracked users
// @access Public
router.get("/", async (req, res) => {
  try {
    const repo = await Repo.find()
    res.send(repo)
  } catch (e) {
    console.error(e)
  }
})

// @route  POST api/users
// @desc   save a user
// @access Public
router.post("/", async (req, res) => {
  try {
    const {
      name,
      id,
      node_id,
      url,
      description,
      watchers,
      forks,
      language,
      updated_at,
      created_at
    } = req.body

    const repo = new Repo({
      name,
      id,
      node_id,
      url,
      description,
      watchers,
      forks,
      language,
      updated_at,
      created_at
    })
    await repo.save()

    res.send(repo)
  } catch (e) {
    console.error(e)
  }
})

module.exports = router
