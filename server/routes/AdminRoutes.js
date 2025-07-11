const express = require("express")
const router = express.Router()
const { UpdateProject, DeleteProject, Addnew } = require('../Controllers/AdminControllers')

// POST /api/admin/projects - Add new project (you might want to add authentication)
router.post("/projects", Addnew)

// PUT /api/admin/projects/:id - Update project
router.put("/projects/:id", UpdateProject)

// DELETE /api/admin/projects/:id - Delete project
router.delete("/projects/:id", DeleteProject)

module.exports = router