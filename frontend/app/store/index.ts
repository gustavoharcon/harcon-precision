import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice.js';
import uiReducer from './uiSlice.js';

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
