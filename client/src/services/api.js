import axios from "axios"

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL: VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Projects API
export const projectsAPI = {
  getAll: (category) => {
    const params = category && category !== "All" ? { category } : {}
    return api.get("/projects", { params })
  },
  getFeatured: () => api.get("/projects/featured"),
  getById: (id) => api.get(`/projects/${id}`),
  create: (projectData) => api.post("/projects", projectData),
}

// Contact API
export const contactAPI = {
  submit: (contactData) => api.post("/contact", contactData),
  getAll: () => api.get("/contact"),
}

export default api
