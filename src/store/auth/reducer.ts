import { createReducer } from '@reduxjs/toolkit';
import { DataStatus, ActionStatus, LocalStorageKey } from '../../common/enums/enums';
import { getUser, loginUser, logoutUser, registerUser } from './actions';
import { Auth } from '../../types/Auth';

const initialState: { auth: Auth | null, status: string } = {
  auth: null,
  status: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(registerUser.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(registerUser.fulfilled, (state, { payload }) => {
    const { auth } = payload;

    state.auth = auth;
    state.status = DataStatus.SUCCESS;
  });

  builder.addCase(getUser.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(getUser.fulfilled, (state, { payload }) => {
    const { user } = payload;

    const token = localStorage.getItem(LocalStorageKey.TOKEN);
    if (!token || !user) {
      state.auth = null;
      localStorage.removeItem(LocalStorageKey.TOKEN);
    } else {
      state.auth = { user, token: localStorage.getItem(LocalStorageKey.TOKEN) || '' };
    }
    state.status = DataStatus.SUCCESS;
  });

  builder.addCase(logoutUser, (state) => {
    state.auth = null;
    state.status = DataStatus.SUCCESS;
    localStorage.removeItem(LocalStorageKey.TOKEN);
  });

  builder.addCase(loginUser.pending, (state) => {
    state.status = DataStatus.PENDING;
  });
  builder.addCase(loginUser.fulfilled, (state, { payload }) => {
    const { auth } = payload;

    state.auth = auth;
    state.status = DataStatus.SUCCESS;
  });

  builder.addMatcher((action) => action.type.endsWith(ActionStatus.REJECTED), (state) => {
    state.status = DataStatus.ERROR;
  });
});

export { reducer };
