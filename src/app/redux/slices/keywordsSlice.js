/* Defines a Redux slice for managing keyword-related state, including counts and details. */

/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import {
    getAllKeywordsOccurrencesAction,
    getKeywordDetailsAction
} from '../../services/keywordsService';

// Initial state of the keywords slice
const initialState = {
  keywordCount: 0,
  keywordDetailCount: 0,
  keywordCounts: [], // Array to store keyword counts
  keyword: '', // Current keyword being searched
  keywordDetails: [], // Array to store detailed information of keywords
};

// Create a slice of the Redux store for managing keywords
const keywordsSlice = createSlice({
  name: 'keywords', // Name of the slice
  initialState: initialState, // Initial state
  reducers: {
    // Reducer to set the current keyword
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    // Reducer to set the details of the current keyword
    setKeywordDetails: (state, action) => {
      state.keywordDetails = action.payload;
    },
    // Reducer to set the count of keyword details
    setKeywordDetailCount: (state, action) => {
      state.keywordDetailCount = action.payload;
    },
    // Reducer to set the count of keywords
    setKeywordCount: (state, action) => {
      state.keywordCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handle fulfilled action of getting all keyword occurrences
    builder
      .addCase(getAllKeywordsOccurrencesAction.fulfilled, (state, action) => {
        state.keywordCounts = action.payload;
      })
      .addCase(getAllKeywordsOccurrencesAction.rejected, (state, action) => {
        // Optionally handle rejection
      })
      // Handle fulfilled action of getting keyword details
      .addCase(getKeywordDetailsAction.fulfilled, (state, action) => {
        state.keywordDetails = action.payload;
      })
      .addCase(getKeywordDetailsAction.rejected, (state, action) => {
        // Optionally handle rejection
      })
  }
});

// Export the actions for use in components
export const {
  setKeyword, setKeywordDetails, setKeywordCount, setKeywordDetailCount
} = keywordsSlice.actions;

// Export the reducer to be used in the store
export default keywordsSlice.reducer;
