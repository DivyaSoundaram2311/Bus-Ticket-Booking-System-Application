import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBusDetails } from '../services/busService';

function BusDetails() {
  const { id } = useParams();
  const [bus, setBus] = useState(null);

  useEffect(() => {
    const fetchBusDetails = async () => {
      const busData = await getBusDetails(id);
      setBus(busData);
    };
    fetchBusDetails();
  }, [id]);

  if (!bus) return <div>Loading...</div>;

  return (
    <div>
      <h2>{bus.name}</h2>
      <p>{bus.origin} to {bus.destination}</p>
      <p>Total Seats: {bus.totalSeats}</p>
      <p>Available Seats: {bus.availableSeats}</p>
    </div>
  );
}

export default BusDetails;
