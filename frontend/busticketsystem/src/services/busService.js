// src/services/busservice.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bus';

export const getAllBuses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching buses', error);
    throw error;
  }
};

export const createBus = async (busData) => {
  try {
    const response = await axios.post(API_URL, busData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating bus', error);
    throw error;
  }
};
