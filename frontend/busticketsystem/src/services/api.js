const API_URL = "http://localhost:5000/api";

export const getBuses = async () => {
  const response = await fetch(`${API_URL}/bus`);
  return response.json();
};

export const bookTicket = async (busId, seatNumber) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/ticket/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ busId, seatNumber }),
  });
  return response.json();
};

export const getMyTickets = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/ticket/my-tickets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
