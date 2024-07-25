/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { callDeleteApi, callGetApi, callPostApi, callPutApi } from '../app/services/apiCallService';

// NOTE: ALL actions return result object which do contain success and error / data keys

  export const addDataAction = createAsyncThunk(
    'data/addData',
    async (payload, thunkAPI) => {
      let result = { success: false };
      try {
        let endpoint = `add_data`;
  
        result = await callPostApi(endpoint, payload);
        if (!result.success) throw new Error(result.error);
  
        thunkAPI.dispatch(getAllDataAction());
  
        return result;
      } catch (error) {
        console.log(error);
  
        return thunkAPI.rejectWithValue(result);
      }
    }
  );

export const getAllDataAction = createAsyncThunk(
    'data/getAllData',
    async (payload, thunkAPI) => {
      let result = { success: false };
      try {
        const endpoint = `read_all_data`;
        result = await callGetApi(endpoint);
        if (!result.success) throw new Error(result.error);
  
        return result.data;
      } catch (error) {
        console.log(error);
  
        return thunkAPI.rejectWithValue(result);
      }
    }
  );