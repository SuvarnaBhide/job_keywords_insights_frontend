/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import keywordsReducer from './slices/keywordsSlice.js';
import dataReducer from './slices/dataSlice.js';
import quizReducer from './slices/quizSlice.js';

export const store = configureStore({
  reducer: {
    keywords: keywordsReducer,
    data: dataReducer,
    quiz: quizReducer
  }

  //devTools: process.env.NODE_ENV !== 'production'
});
