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
  const [quizzesArray, setQuizzesArray] = useState([]);
  const [attemptsArray, setAttemptsArray] = useState([]);

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
    setLoading(true);
    dispatch(saveAttemptAction(payload))
      .unwrap()
      .then((response) => response)
      .catch((error) => console.error('error saving response: ', error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!hasFetchedQuizzes) {
      getQuizzes();
    } else {
      const data = quizzes.map(quiz => [quiz.name, 'View Details']); 
      setQuizzesArray(data);
    }
  }, [hasFetchedQuizzes, getQuizzes, quizzes]);

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
    loading, saveAttempt, getAttempts, getQuestions, quizzesArray, attemptsArray, setAttemptsArray
  };
};

export default useQuizDetails;
