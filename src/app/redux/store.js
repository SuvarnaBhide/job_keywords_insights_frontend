/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import keywordsReducer from './slices/keywordsSlice.js';

export const store = configureStore({
  reducer: {
    keywords: keywordsReducer
  }

  //devTools: process.env.NODE_ENV !== 'production'
});
