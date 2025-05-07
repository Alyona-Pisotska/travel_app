import React, { useCallback, useEffect, useMemo } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './bookingsList.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../store/store';
import { bookings as bookingsFromServer } from '../../store/actions';
import { DataStatus } from '../../common/enums/app/data-status.enum';
import Placeholder from '../Placeholder/Placeholder';
import { DataPlaceholder } from '../../common/enums/app/data-placeholder.enum';
import Loader from '../Loader/Loader';

const BookingsList: React.FC = () => {
  const { bookings, status } = useSelector((state: IRootState) => ({
    bookings: state.bookings.bookings,
    status: state.bookings.status,
  }));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(bookingsFromServer.getBookings({}));
  }, [dispatch]);

  const removeBooking = useCallback((id: string) => {
    dispatch(bookingsFromServer.removeBooking(id));
  }, [dispatch]);

  const sortBookings = useMemo(
    () => {
      if (!bookings) return [];
      return [...bookings].sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
    },
    [bookings],
  );

  if (status === DataStatus.PENDING) {
    return <Loader />;
  }

  if (!bookings.length) {
    return <Placeholder text={DataPlaceholder.NO_TRIP} />;
  }

  return (
    <ul className="bookings__list">
      {sortBookings.map(booking =>
        <BookingCard
          key={booking.id}
          booking={booking}
          removeBooking={removeBooking}
        />
      )}
    </ul>
  );
};

export default BookingsList;
