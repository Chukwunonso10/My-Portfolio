const Project = require("../models/Projects")


// POST /api/admin/projects - Add new project (you might want to add authentication)
const Addnew =  async (req, res) => {
  try {
    const project = new Project(req.body)
    const savedProject = await project.save()
    res.status(201).json(savedProject)
  } catch (error) {
    res.status(400).json({ message: "Error creating project", error: error.message })
  }
}

// PUT /api/admin/projects/:id - Update project
const UpdateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }
    res.json(project)
  } catch (error) {
    res.status(400).json({ message: "Error updating project", error: error.message })
  }
}

// DELETE /api/admin/projects/:id - Delete project
const DeleteProject =  async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)
    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }
    res.json({ message: "Project deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error: error.message })
  }
}

module.exports = {
    UpdateProject,
    DeleteProject,
    Addnew
}