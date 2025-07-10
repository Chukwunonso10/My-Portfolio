const express = require("express")
const { getAll, getFeatured, getById, create } = require("../Controllers/projectControllers")
const router = express.Router()

// GET /api/projects - Get all projects with optional category filter
router.get("/", getAll)

// GET /api/projects/featured - Get featured projects
router.get("/featured", getFeatured)


// GET /api/projects/:id - Get single project
router.get("/:id", getById)

// POST /api/projects - Create new project
router.post("/", create)

module.exports = router
