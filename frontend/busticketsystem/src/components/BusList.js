import React, { useEffect, useState } from 'react';
import { getAllBuses } from '../services/busService';

function BusList() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchBuses = async () => {
      const busData = await getAllBuses();
      setBuses(busData);
    };
    fetchBuses();
  }, []);

  return (
    <div>
      <h2>Bus List</h2>
      {buses.map((bus) => (
        <div key={bus._id}>
          <h3>{bus.name}</h3>
          <p>{bus.origin} to {bus.destination}</p>
        </div>
      ))}
    </div>
  );
}

export default BusList;
