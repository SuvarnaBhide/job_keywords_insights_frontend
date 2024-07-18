/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQuizzesAction,
  getQuestionsAction,
  getAttemptsAction,
  saveAttemptAction
} from '../services/quizService';

const useQuizDetails = () => {
  const dispatch = useDispatch();
  const { quizzes, questions, attempts, quizID, hasFetchedQuizzes, hasFetchedQuestions, hasFetchedAttempts } = useSelector((state) => state.quiz);
  const [loading, setLoading] = useState(false);

  const getQuizzes = useCallback(() => {
    setLoading(true);
    dispatch(getQuizzesAction())
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const getQuestions = useCallback((payload) => {
    //console.log('Fetching questions with payload:', payload);
    setLoading(true);
    dispatch(getQuestionsAction(payload))
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const getAttempts = useCallback(() => {
    //console.log('Fetching attempts with payload:', payload);
    setLoading(true);
    dispatch(getAttemptsAction())
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const saveAttempt = (payload) => {
    return dispatch(saveAttemptAction(payload))
      .unwrap()
      .then((response) => response);
  };

  useEffect(() => {
    if (!hasFetchedQuizzes) {
      //console.log('Fetching quizzes');
      getQuizzes();
    }
  }, [hasFetchedQuizzes, getQuizzes]);

  // useEffect(() => {
  //   console.log('quizID inside questions waala useEffect:', quizID);
  //   console.log('hasFetchedQuestions inside questions waala useEffect:', hasFetchedQuestions);
  //   if (quizID && !hasFetchedQuestions) {
  //     console.log('Fetching questions for quizID:', quizID);
  //     getQuestions({ quiz_id: quizID });
  //   }
  // }, [quizID, hasFetchedQuestions, getQuestions]);

  // useEffect(() => {
  //   if (quizID && !hasFetchedAttempts) {
  //     console.log('Fetching attempts for quizID:', quizID);
  //     getAttempts({ quiz_id: quizID });
  //   }
  // }, [quizID, hasFetchedAttempts, getAttempts]);

  return {
    loading, saveAttempt, getAttempts, getQuestions
  };
};

export default useQuizDetails;
