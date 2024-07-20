import { createSlice } from '@reduxjs/toolkit';
import {
    getQuizzesAction,
    getQuestionsAction,
    getAttemptsAction
} from '../../services/quizService';

const initialState = {
  quizzes: [],
  questions: [],
  attempts: [],
  userID: 0,
  quizID: null,
  attemptID: 0,
  quizScore: '0/0',
  hasFetchedAttempts: false,
  hasFetchedQuestions: false,
  hasFetchedQuizzes: false
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    setUserID: (state, action) => {
      state.userID = action.payload;
    },
    setQuizID: (state, action) => {
      state.quizID = action.payload;
      state.hasFetchedQuestions = false; // Reset questions flag
      //state.hasFetchedAttempts = false; // Reset attempts flag
    },
    setQuizScore: (state, action) => {
      state.quizScore = action.payload;
    },
    setHasFetchedAttempts: (state, action) => {
      state.hasFetchedAttempts = action.payload;
    },
    setHasFetchedQuestions: (state, action) => {
      state.hasFetchedQuestions = action.payload;
    },
    setHasFetchedQuizzes: (state, action) => {
      state.hasFetchedQuizzes = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuizzesAction.fulfilled, (state, action) => {
        state.quizzes = action.payload;
        state.hasFetchedQuizzes = true;
      })
      .addCase(getQuizzesAction.rejected, (state) => {
        state.hasFetchedQuizzes = false; // Only set to false if there was an error
      })
      .addCase(getQuestionsAction.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.hasFetchedQuestions = true;
      })
      .addCase(getQuestionsAction.rejected, (state) => {
        state.hasFetchedQuestions = false; // Only set to false if there was an error
      })
      .addCase(getAttemptsAction.fulfilled, (state, action) => {
        state.attempts = action.payload;
        state.hasFetchedAttempts = true;
      })
      .addCase(getAttemptsAction.rejected, (state) => {
        state.hasFetchedAttempts = false; // Only set to false if there was an error
      });
  }
});

export const {
  setUserID, setQuizID, setQuizScore, setHasFetchedAttempts, setHasFetchedQuestions, setHasFetchedQuizzes
} = quizSlice.actions;

export default quizSlice.reducer;
