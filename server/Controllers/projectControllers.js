const Project = require('../models/Projects')


// GET /api/projects - Get all projects with optional category filter
const getAll = async (req, res) => {
  try {
    const { category } = req.query
    const filter = {}

    if (category && category !== "All") {
      filter.category = category
    }

    const projects = await Project.find(filter).sort({ createdAt: -1 })
    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error: error.message })
  }
}

// GET /api/projects/featured - Get featured projects
const getFeatured =  async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ createdAt: -1 }).limit(6)
    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: "Error fetching featured projects", error: error.message })
  }
}

// GET /api/projects/:id - Get single project
const getById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }
    res.json(project)
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", error: error.message })
  }
}

// POST /api/projects - Create new project
const create = async (req, res) => {
  try {
    const project = new Project(req.body)
    const savedProject = await project.save()
    res.status(201).json(savedProject)
  } catch (error) {
    res.status(400).json({ message: "Error creating project", error: error.message })
  }
}

module.exports = {
    getFeatured,
    getAll,
    getById,
    create
}
