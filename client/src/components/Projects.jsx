"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Loader, Star, Calendar, Code2 } from "lucide-react"
import { projectsAPI } from "../services/api"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])
  const [activeFilter, setActiveFilter] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"]

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const response = await projectsAPI.getAll()
      setProjects(response.data)
      setFilteredProjects(response.data)
    } catch (err) {
      setError("Failed to fetch projects")
      console.error("Error fetching projects:", err)
    } finally {
      setLoading(false)
    }
  }

  const filterProjects = async (category) => {
    setActiveFilter(category)
    try {
      const response = await projectsAPI.getAll(category)
      setFilteredProjects(response.data)
    } catch (err) {
      console.error("Error filtering projects:", err)
    }
  }


  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative">
              <Loader className="animate-spin h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="absolute inset-0 h-12 w-12 mx-auto border-4 border-blue-200 dark:border-blue-800 rounded-full animate-ping"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 animate-pulse">Loading amazing projects...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto animate-in zoom-in duration-500">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-300 rounded-lg rotate-12 animate-spin"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-300 rounded-lg -rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-pink-300 rounded-lg rotate-45 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my MERN stack applications and development projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in slide-in-from-bottom duration-1000 delay-300">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium transform hover:scale-105 animate-in zoom-in duration-500 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project._id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden relative transition-all duration-300 hover:scale-105 animate-in zoom-in duration-700"
              style={{ animationDelay: `${500 + index * 150}ms` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=300&width=400"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full hover:bg-white transition-all duration-300 flex items-center space-x-2 font-medium shadow-lg transform hover:scale-105"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center space-x-2 font-medium shadow-lg transform hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-lg animate-pulse">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  {project.category}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Code2 className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Project meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(project.createdAt).getFullYear()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-12 animate-in fade-in duration-1000">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Code2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

    </section>
  )
}

export default Projects
