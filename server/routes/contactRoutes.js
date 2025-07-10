const express = require("express")
const router = express.Router()
const {submitContact, getContacts } = require('../Controllers/contactController')

// POST /api/contact - Submit contact form
router.post("/", submitContact)


// GET /api/contact - Get all contact messages (admin)
router.get("/", getContacts)

module.exports = router;
