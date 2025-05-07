import { createReducer } from '@reduxjs/toolkit';
import { DataStatus, ActionStatus } from '../../common/enums/enums';
import { getTrips } from './actions';
import { Trip } from '../../types/Trip';

const initialState: { trips: Trip[], status: string } = {
  trips: [],
  status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getTrips.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(getTrips.fulfilled, (state, { payload }) => {
    const { trips } = payload;

    state.trips = trips;
    state.status = DataStatus.SUCCESS;
  });

  builder.addMatcher((action) => action.type.endsWith(ActionStatus.REJECTED), (state) => {
    state.status = DataStatus.ERROR;
  });
});

export { reducer };
