import { createReducer } from '@reduxjs/toolkit';
import { DataStatus, ActionStatus } from '../../common/enums/enums';
import { getTrip } from './actions';
import { Trip } from '../../types/Trip';

const initialState: { trip: Trip | null, status: string } = {
  trip: null,
  status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getTrip.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(getTrip.fulfilled, (state, { payload }) => {
    const { trip } = payload;

    state.trip = trip;
    state.status = DataStatus.SUCCESS;
  });

  builder.addMatcher((action) => action.type.endsWith(ActionStatus.REJECTED), (state) => {
    state.status = DataStatus.ERROR;
  });
});

export { reducer };
