/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import keywordsReducer from './slices/keywordsSlice.js';
import dataReducer from './slices/dataSlice.js';

export const store = configureStore({
  reducer: {
    keywords: keywordsReducer,
    data: dataReducer
  }

  //devTools: process.env.NODE_ENV !== 'production'
});
