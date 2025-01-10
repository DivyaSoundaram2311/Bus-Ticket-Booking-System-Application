import React, { useState } from 'react';
import { bookTicket } from '../services/ticketService';

function BookTicket() {
  const [busId, setBusId] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  const handleBooking = async () => {
    try {
      await bookTicket({ busId, seatNumber });
      alert('Ticket booked successfully');
    } catch (error) {
      console.error(error);
      alert('Booking failed');
    }
  };

  return (
    <div>
      <h2>Book Ticket</h2>
      <input type="text" placeholder="Bus ID" onChange={(e) => setBusId(e.target.value)} />
      <input type="text" placeholder="Seat Number" onChange={(e) => setSeatNumber(e.target.value)} />
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  );
}

export default BookTicket;
