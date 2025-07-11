"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { projectsAPI } from "@/services/api"
import { useEffect } from "react"

const AdminPanel = () => {
    const [ isAdmin, setIsAdmin ] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveUrl: "",
        category: "Full Stack",
        featured: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(",").map((tech) => tech.trim()),
      }

      const response = await projectsAPI.addNew(projectData)
    

      if (response.ok) {
        alert("Project added successfully!")
        setFormData({
          title: "",
          description: "",
          technologies: "",
          githubUrl: "",
          liveUrl: "",
          category: "Full Stack",
          featured: false,
        })
      }
    } catch (error) {
      alert("Error adding project")
    }
  }

    const handleAdminLogin = () => {
    const input = prompt("Enter Admin Key:")
    if (input === import.meta.env.VITE_ADMIN_SECRET) {
      localStorage.setItem("admin_token", input)
      setIsAdmin(false)
    } else {
      alert("Access denied")
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (token === import.meta.env.VITE_ADMIN_SECRET) {
      setIsAdmin(true)
    }
  }, [])

   if (!isAdmin) {
    return (
      <div className="max-w-xl mx-auto text-center mt-10">
        <Button onClick={handleAdminLogin}>Enter Admin Mode</Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Project Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <Textarea
          placeholder="Project Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <Input
          placeholder="Technologies (comma separated)"
          value={formData.technologies}
          onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
          required
        />
        <Input
          placeholder="GitHub URL"
          value={formData.githubUrl}
          onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
          required
        />
        <Input
          placeholder="Live Demo URL"
          value={formData.liveUrl}
          onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
          required
        />
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Mobile">Mobile</option>
        </select>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={formData.featured}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
          />
          <span>Featured Project</span>
        </label>
        <Button type="submit" className="w-full">
            Add Project
        </Button>

      </form>
    </div>
  )
}

export default AdminPanel
