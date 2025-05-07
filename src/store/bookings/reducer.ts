import { createReducer } from '@reduxjs/toolkit';
import { DataStatus, ActionStatus } from '../../common/enums/enums';
import { Booking } from '../../types/Booking';
import { createBooking, getBookings, removeBooking } from './actions';

const initialState: { bookings: Booking[], status: string } = {
  bookings: [],
  status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(createBooking.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(createBooking.fulfilled, (state, { payload }) => {
    const { booking } = payload;

    state.bookings = state.bookings.concat(booking);
    state.status = DataStatus.SUCCESS;
  });

  builder.addCase(getBookings.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(getBookings.fulfilled, (state, { payload }) => {
    const { bookings } = payload;

    state.bookings = bookings;
    state.status = DataStatus.SUCCESS;
  });

  builder.addCase(removeBooking.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(removeBooking.fulfilled, (state, { payload }) => {
    const { id } = payload;

    state.bookings = state.bookings.filter((item) => item.id !== id);
    state.status = DataStatus.SUCCESS;
  });

  builder.addMatcher((action) => action.type.endsWith(ActionStatus.REJECTED), (state) => {
    state.status = DataStatus.ERROR;
  });
});

export { reducer };
