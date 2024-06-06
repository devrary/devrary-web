'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalSlice from '@/state/slice/modalSlice';

const rootReducer = combineReducers({
  modal: modalSlice
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
