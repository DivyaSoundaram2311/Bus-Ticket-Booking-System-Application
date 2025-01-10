const Ticket = require('../models/Ticket');
const Bus = require('../models/Bus');

// Book a ticket
const bookTicket = async (req, res) => {
  //Extract bus ID,seat number from request body
  const { busId, seatNumber } = req.body;
  const bus = await Bus.findById(busId);
  //Check if bus ID exists in db if no give msg 
  if (!bus) {
    return res.status(404).json({ message: 'Bus not found' });
  }
  //Check if there are seats available in the bus if less than 1 --> No seats
  if (bus.availableSeats < 1) {
    return res.status(400).json({ message: 'No available seats' });
  }
  //Creates a new ticket
  const ticket = new Ticket({
    userId: req.user._id,
    busId,
    seatNumber,
  });
  //Save the ticket and update the available seats and returns the booked ticket
  await ticket.save();
  bus.availableSeats -= 1;
  await bus.save();

  res.status(201).json(ticket);
};

const cancelTicket = async (req, res) => {
  try {
    const { ticketId } = req.body;

    // Find the ticket by ID
    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    // Delete the ticket
    await Ticket.deleteOne({ _id: ticketId });

    res.status(200).json({ message: 'Ticket canceled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// View booked tickets
const getBookedTickets = async (req, res) => {
  //Finds tickets for auth user and returns the list of tickets
  const tickets = await Ticket.find({ userId: req.user._id });
  res.json(tickets);
};

module.exports = { bookTicket, cancelTicket, getBookedTickets };
