import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ticket';

export const bookTicket = async (ticketData) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/book`, ticketData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getBookedTickets = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/my-tickets`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
