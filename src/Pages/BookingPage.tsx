import React from 'react';
import BookingsList from '../Components/BookingsList/BookingsList';

const BookingPage: React.FC = () => {
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <BookingsList />
    </main>
  );
};

export default BookingPage;
