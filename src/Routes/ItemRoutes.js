const express = require('express');
const router = express.Router();
const Item = require('../Models/item');


// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET item by id
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create item
router.post('/', async (req, res) => {
  const { name, type, description, imageUrl, additionalImages } = req.body;
  try {
    const newItem = new Item({ name, type, description, imageUrl, additionalImages });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



module.exports = router;
