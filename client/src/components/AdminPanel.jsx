"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { projectsAPI } from "@/services/api"
import { useEffect } from "react"

const AdminPanel = () => {
    const [projects, setProjects] = useState([])
    const [editingId, setEditingId] = useState(null)
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

    const fetchProjects = async () => {
    try {
        const res =await projectsAPI.getAll()
        setProjects(res.data)

    } catch (error) {
        console.error("Error fetching projects:",error)
    }
  }

   useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (token === import.meta.env.VITE_ADMIN_SECRET) {
      setIsAdmin(true)
      fetchProjects();
    }
  }, [])



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(",").map((tech) => tech.trim()),
      }
      let response;
      if (editingId){
        response = await projectsAPI.UpdateProject(editingId, projectData)
        alert("Project updated!")
      }else{
        response = await projectsAPI.addNew(projectData)
         alert("Project added successfully!")
      }
    
      if (response) {
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
      setEditingId(null)
      fetchProjects()
    } catch (error) {
        console.error("Eror submitting:", error)
      alert("Error adding project")
    }
  }

    const handleAdminLogin = () => {
    const input = prompt("Enter Admin Key:")
    if (input === import.meta.env.VITE_ADMIN_SECRET) {
      localStorage.setItem("admin_token", input)
      setIsAdmin(true)
    } else {
      alert("Access denied")
    }
  }


   if (!isAdmin) {
    return (
      <div className="max-w-xl mx-auto text-center mt-10">
        <Button onClick={handleAdminLogin}>Enter Admin Mode</Button>
      </div>
    )
  }

  const handleDelete = async(id) =>{
    if (!confirm("Are you sure?")) return
    try {
        await projectsAPI.DeleteProject(id)
        alert("Project deleted!")
        fetchProjects()
    } catch (error) {
        alert("Error deleting project")
    }
  }

  const handleEdit = (project) => {
  setFormData({
    title: project.title,
    description: project.description,
    technologies: project.technologies.join(", "),
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
    category: project.category,
    featured: project.featured,
  })
  setEditingId(project._id)
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

      <h3 className="text-xl font-bold mt-10 mb-4">Manage Projects</h3>
        <ul className="space-y-4">
        {projects.map((project) => (
         <li key={project._id} className="border p-4 rounded-md bg-gray-50 flex justify-between items-start">
      <div>
        <h4 className="font-semibold text-lg">{project.title}</h4>
        <p className="text-sm text-gray-600">{project.description}</p>
        <p className="text-xs text-gray-500">{project.category}</p>
      </div>
      <div className="space-x-2">
        <Button variant="secondary" className="bg-green-400 px-6" onClick={() => handleEdit(project)}>Edit</Button>
        <Button variant="destructive" onClick={() => handleDelete(project._id)}>Delete</Button>
      </div>
        </li>
            ))}
        </ul>

        </div>
  )
}

export default AdminPanel
