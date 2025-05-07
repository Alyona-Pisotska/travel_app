import { configureStore } from '@reduxjs/toolkit';
import {
  auth as authService,
  notification as notificationService,
  trips as tripsService,
  bookings as bookingsService,
} from '../services/services';
import { auth, trips, trip, bookings, toastr } from './root-reducer';

const store = configureStore({
  reducer: {
    toastr,
    auth,
    trips,
    trip,
    bookings,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          authService,
          tripsService,
          bookingsService,
          notificationService,
        },
      },
      serializableCheck: false,
    });
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
