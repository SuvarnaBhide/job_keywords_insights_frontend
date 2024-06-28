/* eslint-disable no-unused-vars */
// Slice containes crawler tab related states
import { createSlice } from '@reduxjs/toolkit';
import {
    getAllKeywordsOccurrencesAction,
    getKeywordDetailsAction
} from '../../services/keywordsService';

const initialState = {
  keywordCount: 0,
  keywordDetailCount: 0,
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
    setKeywordDetails: (state, action) => {
      state.keywordDetails = action.payload;
    },
    setKeywordDetailCount: (state, action) => {
      state.keywordDetailCount = action.payload;
    },
    setKeywordCount: (state, action) => {
      state.keywordCount = action.payload;
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
  setKeyword, setKeywordDetails, setKeywordCount, setKeywordDetailCount
} = keywordsSlice.actions;

export default keywordsSlice.reducer;
