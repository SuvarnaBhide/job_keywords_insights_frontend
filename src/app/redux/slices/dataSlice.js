/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import {
    addDataAction,
    getAllDataAction
} from '../../services/dataService';

const initialState = {
  dataCount: 0,
  allData: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setDataCount: (state, action) => {
      state.dataCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addDataAction.fulfilled, (state, action) => {
        state.keywordCounts = action.payload;
      })
      .addCase(addDataAction.rejected, (state, action) => {})
      .addCase(getAllDataAction.fulfilled, (state, action) => {
        state.allData = action.payload;
      })
      .addCase(getAllDataAction.rejected, (state, action) => {});
  }
});

export const {
  setKeyword, setKeywordDetails, setKeywordCount, setKeywordDetailCount
} = dataSlice.actions;

export default dataSlice.reducer;
