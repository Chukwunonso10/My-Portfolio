const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const ConnectDB = require('./config/db')


dotenv.config()
ConnectDB()
// Import routes
const projectRoutes = require("./routes/projectsRoutes")
const contactRoutes = require("./routes/contactRoutes")
const adminRoutes = require('./routes/AdminRoutes')
const checkIsAdminSecrete = require('./middleware/checkIsAdminSecrete')



const app = express()
const PORT = process.env.PORT

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const allowedOrigins = [
  "http://localhost:5173",
  "https://my-portfolio-1frontend.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));


// Routes
app.use("/api/projects", projectRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/admin", checkIsAdminSecrete, adminRoutes)


// Health check
app.get("/api/health", (req, res) => {
  res.json({ message: "MERN Portfolio API is running!" })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "Something went wrong!" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
