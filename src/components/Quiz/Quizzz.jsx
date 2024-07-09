import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../styles/index.css';
import '../../styles/Quizzz.css';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { CircularProgress } from '@mui/material';
import { setHasFetchedAttempts } from '../../app/redux/slices/quizSlice';

const Quizzz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]); // Track selected options
  const { questions, quizID, hasFetchedQuestions } = useSelector((state) => state.quiz);
  const { loading, saveAttempt, getQuestions } = useQuizDetails();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const startTime = useRef(new Date());

  useEffect(() => {
    if (quizID && !hasFetchedQuestions) {
      console.log('Fetching questions for quizID:', quizID);
      getQuestions({ quiz_id: quizID });
    }
  }, [quizID, hasFetchedQuestions, getQuestions]);

  useEffect(() => {
    console.log('Selected Options:', selectedOptions);
  }, [selectedOptions]);

  const submitQuiz = async () => {
    const endTime = new Date();
    const timeTaken = Math.round((endTime - startTime.current) / 1000); // Time in seconds

    // Build the details list with selected option IDs
    const details = questions.map((question) => {
      const selectedOption = selectedOptions.find(option => option.question_id === question.id);
      return {
        question_id: question.id,
        option_id: selectedOption ? selectedOption.option_id : null,
        content: ''
      };
    });

    const dateTime = endTime.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const payload = {
      user_id: 1,
      quiz_id: quizID,
      details,
      dateTime,
      timeTaken
    };

    try {
      dispatch(setHasFetchedAttempts(false));
      const response = await saveAttempt(payload);
      console.log('Attempt saved:', response);
    } catch (error) {
      console.error('Error saving attempt:', error);
    }
  };

  const handleNextClick = () => {
    if (lock) {
      if (index === questions.length - 1) {
        setResult(true);
        submitQuiz(); // Save the attempt when quiz is finished
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setLock(false);
    }
  };

  const viewAttemptsClick = () => {
    navigate('/quiz/quizzes/quizdetails/');
  };

  const checkAnswer = (optionIndex) => {
    if (!lock) {
      const selectedOptionId = questions[index].options[optionIndex].id;
      const questionId = questions[index].id;

      // Update the selected option for the current question
      setSelectedOptions((prevSelectedOptions) => {
        const existingOptionIndex = prevSelectedOptions.findIndex(option => option.question_id === questionId);
        if (existingOptionIndex > -1) {
          // Update existing entry
          const updatedOptions = [...prevSelectedOptions];
          updatedOptions[existingOptionIndex] = { question_id: questionId, option_id: selectedOptionId };
          return updatedOptions;
        } else {
          // Add new entry
          return [...prevSelectedOptions, { question_id: questionId, option_id: selectedOptionId }];
        }
      });

      const isCorrect = questions[index].options[optionIndex].is_correct;
      if (isCorrect) setScore((prevScore) => prevScore + 1);
      setLock(true);
    }
  };

  if (loading || !questions || questions.length === 0) {
    return <CircularProgress />;
  }

  if (result) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#f0fcff] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px]">
          <h1>Quiz App</h1>
          <hr className="border-0 h-0.5 bg-[#707070]" />
          <h2 className="text-lg font-medium">
            Your score is: {score} out of {questions.length}
          </h2>
          <div className="flex justify-center mt-4">
            <button
              onClick={viewAttemptsClick}
              className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-sm w-60 ${
                !lock ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!lock}
            >
              View Previous Attempts
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#f0fcff] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px]">
        <div className="flex justify-between">
          <h1>Quiz App</h1>
          <h1>
            {index + 1} of {questions.length} questions
          </h1>
        </div>
        <hr className="border-0 h-0.5 bg-[#707070]" />
        <h2 className="text-lg font-medium">
          {index + 1}. {questions[index].content}
        </h2>
        <ul>
          {questions[index].options.map((option, optionIndex) => {
            let className = "flex items-center h-12 px-4 border border-[#686868] rounded-lg mb-5 text-sm cursor-pointer";
            if (lock) {
              if (option.id === selectedOptions.find(option => option.question_id === questions[index].id)?.option_id) {
                className += option.is_correct ? ' correct' : ' wrong';
              } else if (option.is_correct) {
                className += ' correct';
              }
            }
            return (
              <li
                key={option.id}
                onClick={() => checkAnswer(optionIndex)}
                className={className}
              >
                {option.content}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleNextClick}
            className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-sm w-24 ${
              !lock ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!lock}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quizzz;
