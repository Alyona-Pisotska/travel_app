import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { Auth } from '../../services/auth/auth.service';
import { LocalStorageKey } from '../../common/enums/storage/local-storage.enum';
import { Notification } from '../../services/notification/notification.service';
import { Error } from '../../common/enums/error/error-text';

export const registerUser = createAsyncThunk<any, any, { extra: { authService: Auth, notificationService: Notification } }>(
  ActionType.SIGN_UP,
  async (payload, { extra, rejectWithValue }) => {
    try {
      return { auth: await extra.authService.register(payload) };
    } catch (err: any) {
      extra.notificationService.error('Error', `${err?.message} ${Error.TEXT}` || '');
      return rejectWithValue({ error: err?.message || '' })
    }
  },
);

export const getUser = createAsyncThunk<any, any, { extra: { authService: Auth } }>(
  ActionType.GET_USER,
  async (_args, { extra }) => {
    const token = localStorage.getItem(LocalStorageKey.TOKEN);
    return {
      user: token ? await extra.authService.getUser() : null,
    };
  },
);

export const logoutUser = createAction(ActionType.LOGOUT_USER, () => ({
  payload: {
    auth: null,
  }
}));

export const loginUser = createAsyncThunk<any, any, { extra: { authService: Auth, notificationService: Notification } }>(
  ActionType.SIGN_IN,
  async (payload, { extra, rejectWithValue }) => {
    try {
      return { auth: await extra.authService.login(payload) };
    } catch (err: any) {
      extra.notificationService.error('Error', `${err?.message} ${Error.TEXT}` || '');
      return rejectWithValue({ error: err?.message || '' })
    }
  },
);
