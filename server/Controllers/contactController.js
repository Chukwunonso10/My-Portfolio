const Contact = require("../models/Contact")

// POST /api/contact - Submit contact form
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and message are required",
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      })
    }

    const contact = new Contact({
      name,
      email,
      subject,
      message,
    })

    const savedContact = await contact.save()

    res.status(201).json({
      message: "Message sent successfully! I'll get back to you soon.",
      id: savedContact._id,
    })
  } catch (error) {
    res.status(500).json({
      message: "Error sending message",
      error: error.message,
    })
  }
}

// GET /api/contact - Get all contact messages (admin)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    res.status(500).json({
      message: "Error fetching contacts",
      error: error.message,
    })
  }
}

module.exports = {
    submitContact,
    getContacts
}
