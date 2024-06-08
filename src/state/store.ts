'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalSlice from '@/state/slice/modalSlice';
import sideSlice from '@/state/slice/sideSlice';
import toastSlice from '@/state/slice/toastSlice'
import messageSlice from '@/state/slice/messageSlice';

const rootReducer = combineReducers({
  modal: modalSlice,
  side: sideSlice,
  toast: toastSlice,
  message: messageSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
