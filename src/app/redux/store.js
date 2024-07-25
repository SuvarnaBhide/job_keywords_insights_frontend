/* Sets up the Redux store for magaing state in the application  */

/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import keywordsReducer from './slices/keywordsSlice.js';
import quizReducer from './slices/quizSlice.js';

export const store = configureStore({
  reducer: {
    keywords: keywordsReducer,
    quiz: quizReducer
  }
});
