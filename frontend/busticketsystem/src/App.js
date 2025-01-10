import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import BusList from './components/BusList';
import BusDetails from './components/BusDetails';
import BookTicket from './components/BookTicket';
import MyTickets from './components/MyTickets';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/buses" element={<BusList />} />
          <Route path="/bus/:id" element={<BusDetails />} />
          <Route path="/book-ticket" element={<BookTicket />} />
          <Route path="/my-tickets" element={<MyTickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
