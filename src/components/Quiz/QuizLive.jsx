/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../styles/index.css';
import '../../styles/QuizLive.css';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { CircularProgress, useTheme } from '@mui/material';
import { setHasFetchedAttempts } from '../../app/redux/slices/quizSlice';

// Utility function to shuffle array
const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const QuizLive = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]); // Track selected options
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // Store shuffled questions
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false); // Track if all questions are answered
  const { questions, quizID, hasFetchedQuestions } = useSelector((state) => state.quiz);
  const { loading, saveAttempt, getQuestions } = useQuizDetails();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    // Fetch questions for the current quiz
    if (quizID && !hasFetchedQuestions) {
      getQuestions({ quiz_id: quizID });
    }
  }, [quizID, hasFetchedQuestions, getQuestions]);

  useEffect(() => {
    // Shuffle questions
    if (questions.length > 0) {
      const shuffled = questions.map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      }));
      setShuffledQuestions(shuffled);
    }
  }, [questions]);

  useEffect(() => {
    // Check if all questions are answered
    const allAnswered = shuffledQuestions.every((question) => 
      selectedOptions.some((option) => option.question_id === question.id)
    );
    setAllQuestionsAnswered(allAnswered);
  }, [selectedOptions, shuffledQuestions]);

  const submitQuiz = async () => {

    // save the shuffled order of options and selected option in details { question_id, option_id, content, order }

    const details = shuffledQuestions.map((question) => {
      const selectedOption = selectedOptions.find(option => option.question_id === question.id);
      return {
        question_id: question.id,
        option_id: selectedOption ? selectedOption.option_id : null,
        content: '',
        order: question.options.map(option => option.id) // Save the shuffled order of option IDs
      };
    });

    //add details to payload

    const payload = {
      user_id: 1,
      quiz_id: quizID,
      details
    };

    // save attempt

    try {
      dispatch(setHasFetchedAttempts(false));
      saveAttempt(payload);
      setResult(true);
    } catch (error) {
      console.error('Error saving attempt:', error);
    }
  };

  const checkAnswer = (optionIndex, questionIndex) => {

    // if option is not selected, select it

    if (!selectedOptions.find(option => option.question_id === shuffledQuestions[questionIndex].id)) {
      const selectedOptionId = shuffledQuestions[questionIndex].options[optionIndex].id;
      const questionId = shuffledQuestions[questionIndex].id;

      // Update the selected option for the current question
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        { question_id: questionId, option_id: selectedOptionId }
      ]);

      // Check if the selected option is correct
      const isCorrect = shuffledQuestions[questionIndex].options[optionIndex].is_correct;
      if (isCorrect) setScore((prevScore) => prevScore + 1);
    }
  };

  if (loading || !shuffledQuestions || shuffledQuestions.length === 0) {
    return <div className='flex justify-center items-center w-full'>
      <CircularProgress />
    </div>
  }

  if (result) {
    return (
      <div className="flex justify-center items-center w-full">
        <div 
          className={`text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px]`} 
          style={{ backgroundColor: theme.palette.quiz.background }}
        >
          <h1>Quiz App</h1>
          <hr className={`border-0 h-0.5 bg-[${theme.palette.quiz.borderDark}]`} />
          <h2 className="text-lg font-medium">
            Your score is: {score} out of {shuffledQuestions.length}
          </h2>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate('/quiz/attempts')}
              className={`bg-[${theme.palette.button.primary}] hover:bg-[${theme.palette.button.hover}] text-white font-semibold py-2 px-4 rounded text-sm w-60`}
            >
              View Previous Attempts
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className={`bg-[${theme.palette.quiz.background}] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px] overflow-y-scroll`}>
        <h1>Quiz App</h1>
        <hr className={`border-0 h-0.5 bg-[${theme.palette.quiz.borderDark}]`} />
        {/* Display the questions */}
        {shuffledQuestions.map((question, questionIndex) => (
          <div key={question.id} className="mb-10">
            <h2 className="text-lg font-medium">
              {questionIndex + 1}. {question.content}
            </h2>
            <ul>
              {/* Display the options */}
              {question.options.map((option, optionIndex) => {
                let className = `flex items-center h-12 px-4 border border-[${theme.palette.quiz.borderLight}] rounded-lg mb-5 text-sm cursor-pointer`;
                const selectedOption = selectedOptions.find(option => option.question_id === question.id);
                
                {/* Highlight the selected option */}
                if (selectedOption) {
                  if (option.id === selectedOption.option_id) {
                    className += option.is_correct ? ' correct' : ' wrong';
                  } else if (option.is_correct) {
                    className += ' correct';
                  }
                }
                
                {/* For each question, display the option */}
                return (
                  <li
                    key={option.id}
                    onClick={() => checkAnswer(optionIndex, questionIndex)}
                    className={className}
                  >
                    {option.content}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => submitQuiz()}
            className={`bg-[${theme.palette.button.primary}] hover:bg-[${theme.palette.button.hover}] text-white font-semibold py-2 px-4 rounded text-[12px] ${!allQuestionsAnswered ? 'opacity-50 cursor-not-allowed' : `hover:bg-[${theme.palette.button.hover}]`}`}
            disabled={!allQuestionsAnswered} // Disable button if not all questions are answered
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizLive;
