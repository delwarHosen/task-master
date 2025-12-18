import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './feature/authApi.js';
import { tasksApi } from './feature/tasksApi.js';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, tasksApi.middleware),
});
