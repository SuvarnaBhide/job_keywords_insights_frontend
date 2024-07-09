/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { callDeleteApi, callGetApi, callPostApi, callPutApi } from './apiCallService';

// NOTE: ALL actions return result object which do contain success and error / data keys

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

  export const getAttemptsAction = createAsyncThunk(
    'quiz/getAttempts',
    async (payload, thunkAPI) => {
      let result = { success: false };
      if (!payload || !payload.quiz_id || payload.quiz_id < 1) {
        result.success = false;
        result.data = [];
        return result;
      }
      try {
        const endpoint = `attempts/1`;
        result = await callPostApi(endpoint, payload);
        if (!result.success) throw new Error(result.error);
  
        return result.data;
      } catch (error) {
        console.log(error);
  
        return thunkAPI.rejectWithValue(result);
      }
    }
  );

  export const saveAttemptAction = createAsyncThunk(
    'quiz/saveAttempt',
    async (payload, thunkAPI) => {
      let result = { success: false };
      try {
        const endpoint = `attempts`;
        //console.log('Saving attempt with payload:', payload);
        result = await callPostApi(endpoint, payload);
        if (!result.success) throw new Error(result.error);
        
        //console.log('Attempt saved successfully, dispatching getAttemptsAction');
        await thunkAPI.dispatch(getAttemptsAction({ quiz_id: payload.quiz_id }));
        
        return result;
      } catch (error) {
        console.error('Error saving attempt:', error);
        return thunkAPI.rejectWithValue(result);
      }
    }
  );
  