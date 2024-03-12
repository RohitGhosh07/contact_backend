const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contact');

// Middleware to parse JSON
router.use(express.json());

// POST route to create a new contact
router.post('/', async (req, res) => {
  try {
    // Destructure name and number from the request body
    const { name, number } = req.body;

    // Create a new contact using the Contact model
    const newContact = new Contacts({
      name,
      number,
    });

    // Save the contact to the database
    await newContact.save();

    // Respond with the created contact
    res.status(201).json(newContact);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error creating contact:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET route to fetch all contacts
router.get('/contacts', async (req, res) => {
  try {
    // Fetch all contacts from the database
    const allContacts = await Contacts.find();

    // Respond with the fetched contacts
    res.status(200).json(allContacts);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error fetching contacts:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
