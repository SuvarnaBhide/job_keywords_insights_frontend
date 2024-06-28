/* eslint-disable no-unused-vars */
// Slice containes crawler tab related states
import { createSlice } from '@reduxjs/toolkit';
import {
    getAllKeywordsOccurrencesAction,
    getKeywordDetailsAction
} from '../../services/keywordsService';

const initialState = {
  keywordCounts: [], // { keyword: count, ... }
  keyword: '',
  keywordDetails: [], // 
};

const keywordsSlice = createSlice({
  name: 'keywords',
  initialState: initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllKeywordsOccurrencesAction.fulfilled, (state, action) => {
        state.keywordCounts = action.payload;
      })
      .addCase(getAllKeywordsOccurrencesAction.rejected, (state, action) => {})
      .addCase(getKeywordDetailsAction.fulfilled, (state, action) => {
        state.keywordDetails = action.payload;
      })
      .addCase(getKeywordDetailsAction.rejected, (state, action) => {})
  }
});

export const {
  setKeyword
} = keywordsSlice.actions;

export default keywordsSlice.reducer;
