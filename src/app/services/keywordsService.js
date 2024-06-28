/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { callDeleteApi, callGetApi, callPostApi, callPutApi } from './apiCallService';

// NOTE: ALL actions return result object which do contain success and error / data keys

export const getAllKeywordsOccurrencesAction = createAsyncThunk(
    'keywords/getAllKeywordsOccurrences',
    async (thunkAPI) => {
      let result = { success: false };
      try {
        const endpoint = `keyword_counts`;
        result = await callGetApi(endpoint);
        if (!result.success) throw new Error(result.error);
  
        return result.data;
      } catch (error) {
        console.log(error);
  
        return thunkAPI.rejectWithValue(result);
      }
    }
  );

  export const getKeywordDetailsAction = createAsyncThunk(
    'keywords/getKeywordDetails',
    async (payload, thunkAPI) => {
      let result = { success: false };
      try {
        const endpoint = `keyword/${payload.keyword}`;
        result = await callGetApi(endpoint);
        if (!result.success) throw new Error(result.error);
  
        return result.data;
      } catch (error) {
        console.log(error);
  
        return thunkAPI.rejectWithValue(result);
      }
    }
  );