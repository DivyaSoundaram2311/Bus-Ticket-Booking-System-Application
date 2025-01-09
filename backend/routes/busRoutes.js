const express = require('express');
const { createBus, getAllBuses, getBusDetails } = require('../controllers/busController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, createBus);
router.get('/', getAllBuses);
router.get('/:id', getBusDetails);

module.exports = router;
