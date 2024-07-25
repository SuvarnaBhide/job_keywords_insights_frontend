/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { callDeleteApi, callGetApi, callPostApi, callPutApi } from './apiCallService';

// NOTE: ALL actions return result object which do contain success and error / data keys

  // get list of quizzes from the database
  export const getQuizzesAction = createAsyncThunk(
    'quiz/getQuizzes',
    async (payload, thunkAPI) => {
      let result = { success: false };
      try {
        const endpoint = `quizzes`;
        result = await callGetApi(endpoint);
        if (!result.success) throw new Error(result.error);
  
        return result.data;
      } catch (error) {
        console.log(error);
  
        return thunkAPI.rejectWithValue(result);
      }
    }
  );

  // get list of questions as per quiz_id
  export const getQuestionsAction = createAsyncThunk(
    'quiz/getQuestions',
    async (payload, thunkAPI) => {
      let result = { success: false };
      try {
        // if (!payload || !payload.quiz_id || payload.quiz_id < 1) {
        //   result.success = false;
        //   result.data = [];
        //   return result;
        // }
        const endpoint = `${payload.quiz_id}/questions`;
        result = await callGetApi(endpoint);
        if (!result.success) throw new Error(result.error);
  
        return result.data;
      } catch (error) {
        console.log(error);
  
        return thunkAPI.rejectWithValue(result);
      }
    }
  );

  // get list of attempts (asumption made: there is only one user for this application)
  export const getAttemptsAction = createAsyncThunk(
    'quiz/getAttempts',
    async (payload, thunkAPI) => {
      let result = { success: false };
      try {
        const endpoint = `attempts/1`;
        result = await callGetApi(endpoint);
        if (!result.success) throw new Error(result.error);
  
        return result.data;
      } catch (error) {
        console.log(error);
  
        return thunkAPI.rejectWithValue(result);
      }
    }
  );

  // save a user's quiz attempt
  export const saveAttemptAction = createAsyncThunk(
    'quiz/saveAttempt',
    async (payload, thunkAPI) => {
      let result = { success: false };
      try {
        const endpoint = `attempts`;
        result = await callPostApi(endpoint, payload);
        if (!result.success) throw new Error(result.error);
        
        await thunkAPI.dispatch(getAttemptsAction({ quiz_id: payload.quiz_id }));
        
        return result;
      } catch (error) {
        console.error('Error saving attempt:', error);
        return thunkAPI.rejectWithValue(result);
      }
    }
  );
  