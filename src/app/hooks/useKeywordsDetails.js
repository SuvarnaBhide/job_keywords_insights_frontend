/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllKeywordsOccurrencesAction,
  getKeywordDetailsAction
} from '../services/keywordsService';

const useKeywordsDetails = () => {
  const dispatch = useDispatch();

  const { keywordCounts, keyword, keywordDetails } = useSelector((state) => state.keywords);
  const [keywordCountsArray, setKeywordCountsArray] = useState([]);
  const [keywordDetailsArray, setKeywordDetailsArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const getKeywordDetails = useCallback((keyword) => {
    setLoading(true);
    const payload = {
      keyword: keyword
    }
    dispatch(getKeywordDetailsAction(payload))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [dispatch]);

  const getAllKeywordsOccurrences = useCallback(() => {
    setLoading(true);
  
    dispatch(getAllKeywordsOccurrencesAction())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [dispatch]);
  
  useEffect(() => {
    if (!keywordCounts || keywordCounts.length === 0) {
      getAllKeywordsOccurrences();
    } else {
      const data = keywordCounts.map(item => [item.Keyword, item.Count]);  
      setKeywordCountsArray(data);
    }
  }, [keywordCounts, getAllKeywordsOccurrences]);

  useEffect(() => {
    if (keyword && (!keywordDetails || keywordDetails.length === 0)) {
      getKeywordDetails(keyword);
    } else {
      const data = keywordDetails.map(item => [item.Company, item["Job Title"], item.Filename]);  
      setKeywordDetailsArray(data);
    }
  }, [keywordDetails, getKeywordDetails, keyword]);

  return {
    keywordCountsArray,
    keywordDetailsArray,
    loading,
  };
};

export default useKeywordsDetails;
