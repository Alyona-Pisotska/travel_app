import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { Bookings } from '../../services/bookings/bookings.service';
import { Notification } from '../../services/notification/notification.service';
import { Error } from '../../common/enums/error/error-text';

export const createBooking = createAsyncThunk<any, any, { extra: { bookingsService: Bookings, notificationService: Notification } }>(
  ActionType.BOOKINGS,
  async (payload, { extra, rejectWithValue }) => {
    try {
      const result = { booking: await extra.bookingsService.create(payload) };
      extra.notificationService.success('Success', 'A new booking has been created');
      return result;
    } catch (err: any) {
      extra.notificationService.error('Error', `${err?.message} ${Error.TEXT}` || '');
      return rejectWithValue({ error: err?.message || '' })
    }
  },
);

export const getBookings = createAsyncThunk<any, any, { extra: { bookingsService: Bookings, notificationService: Notification } }>(
  ActionType.GET,
  async (payload, { extra, rejectWithValue }) => {
    try {
      return { bookings: await extra.bookingsService.getBookings() };
    } catch (err: any) {
      extra.notificationService.error('Error', `${err?.message} ${Error.TEXT}` || '');
      return rejectWithValue({ error: err?.message || '' })
    }
  },
);

export const removeBooking = createAsyncThunk<any, any, { extra: { bookingsService: Bookings, notificationService: Notification } }>(
  ActionType.DELETE,
  async (id, { extra, rejectWithValue }) => {
    try {
      await extra.bookingsService.removeBooking(id);
      extra.notificationService.success('Success delete', 'The booking has been deleted');
      return {
        id,
      };
    } catch (err: any) {
      extra.notificationService.error('Error', `${err?.message} ${Error.TEXT}` || '');
      return rejectWithValue({ error: err?.message || '' })
    }
  },
);
