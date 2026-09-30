import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
