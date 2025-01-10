const Bus = require('../models/Bus');

// Extract bus details from the request body
const createBus = async (req, res) => {
  const { name, origin, destination, totalSeats, availableSeats } = req.body;
//Creates a new bus document and saves the bus to db and returns the created bus as response
  const bus = new Bus({ name, origin, destination, totalSeats, availableSeats });
  await bus.save();

  res.status(201).json(bus);
};

// Get all buses
//Fetches all bus records from db and returns the buses as response
const getAllBuses = async (req, res) => {
  const buses = await Bus.find();
  res.json(buses);
};

// Get bus details by ID
const getBusDetails = async (req, res) => {
  //find a bus by its id
  const bus = await Bus.findById(req.params.id);
  //if no bus is found with ID give msg else send the bus details back to client
  if (!bus) {
    return res.status(404).json({ message: 'Bus not found' });
  }

  res.json(bus);
};

module.exports = { createBus, getAllBuses, getBusDetails };
