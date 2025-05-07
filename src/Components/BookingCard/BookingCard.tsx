import React from 'react';
import './bookingCard.css';
import { Booking } from '../../types/Booking';
import { dateFormat } from '../../helper/date';

interface Props {
  booking: Booking;
  removeBooking: (id: string) => void;
}

const BookingCard: React.FC<Props> = ({ booking, removeBooking }) => {
  const bookingDate = new Date(booking.date);

  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {booking.trip.title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {booking.guests} guests
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {dateFormat(bookingDate)}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        {booking.totalPrice} $
      </span>
      <button
        data-test-id="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
        onClick={() => removeBooking(booking.id)}
      >
        <span className="visually-hidden">Cancel booking</span>
        ×
      </button>
    </li>
  );
};

export default BookingCard;
