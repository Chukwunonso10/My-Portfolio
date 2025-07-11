import axios from "axios"

const VITE_API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`

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
  UpdateProject: (id, projectData) => api.put(`/admin/projects/${id}`, projectData,
                                                        {headers: {
                                                            "x-admin-secret": import.meta.env.VITE_ADMIN_SECRET}}),
  DeleteProject: (id) => api.delete(`/admin/projects/${id}`, 
                                                {headers: {
                                                      "x-admin-secret": import.meta.env.VITE_ADMIN_SECRET}}),
  getById: (id) => api.get(`/projects/${id}`),
  addNew: (projectData) => api.post("/admin/projects", projectData, 
                        {headers: {
        "x-admin-secret": import.meta.env.VITE_ADMIN_SECRET}}
  )
}

// Contact API
export const contactAPI = {
  submit: (contactData) => api.post("/contact", contactData),
  getAll: () => api.get("/contact"),
}

export default api
