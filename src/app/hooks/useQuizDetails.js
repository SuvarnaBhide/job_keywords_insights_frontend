/* Custom hook for managing and syncrhonizing quiz-related data with Redux store*/

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

  //fetch quizzes
  const getQuizzes = useCallback(() => {
    setLoading(true);
    dispatch(getQuizzesAction())
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  //fetch questions
  const getQuestions = useCallback((payload) => {
    setLoading(true);
    dispatch(getQuestionsAction(payload))
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  //fetch attempts
  const getAttempts = useCallback(() => {
    setLoading(true);
    dispatch(getAttemptsAction())
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  //save quiz attempt
  const saveAttempt = (payload) => {
    setLoading(true);
    dispatch(saveAttemptAction(payload))
      .unwrap()
      .then((response) => response)
      .catch((error) => console.error('error saving response: ', error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    // if quiz data is not yet fetched, fetch it
    // else map quizzes to quizzesArray
    if (!hasFetchedQuizzes) {
      getQuizzes();
    } else {
      const data = quizzes.map(quiz => [quiz.name, 'View Details']); 
      setQuizzesArray(data);
    }
  }, [hasFetchedQuizzes, getQuizzes, quizzes]);

  return {
    loading, saveAttempt, getAttempts, getQuestions, quizzesArray, attemptsArray, setAttemptsArray
  };
};

export default useQuizDetails;
