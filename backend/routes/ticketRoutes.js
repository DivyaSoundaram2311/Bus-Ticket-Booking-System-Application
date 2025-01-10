const express = require('express');
const { bookTicket, cancelTicket, getBookedTickets } = require('../controllers/ticketController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/book', authMiddleware, bookTicket);
router.post('/cancel', authMiddleware, cancelTicket);
router.get('/my-tickets', authMiddleware, getBookedTickets);

module.exports = router;
