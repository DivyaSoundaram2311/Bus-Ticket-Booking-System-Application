import React, { useEffect, useState } from 'react';
import { getBookedTickets } from '../services/ticketService';

function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const ticketData = await getBookedTickets();
      setTickets(ticketData);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>My Tickets</h2>
      {tickets.map((ticket) => (
        <div key={ticket._id}>
          <p>Bus ID: {ticket.busId}</p>
          <p>Seat Number: {ticket.seatNumber}</p>
        </div>
      ))}
    </div>
  );
}

export default MyTickets;
