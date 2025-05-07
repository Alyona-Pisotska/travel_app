import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { Trips } from '../../services/trips/trips.service';
import { Notification } from '../../services/notification/notification.service';
import { Error } from '../../common/enums/error/error-text';

export const getTrip = createAsyncThunk<any, any, { extra: { tripsService: Trips, notificationService: Notification } }>(
  ActionType.TRIP,
  async (id, { extra, rejectWithValue }) => {
    try {
      return { trip: await extra.tripsService.getTrip(id) };
    } catch (err: any) {
      extra.notificationService.error('Error', `${err?.message} ${Error.TEXT}` || '');
      return rejectWithValue({ error: err?.message || '' })
    }
  },
);
