import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../styles/index.css';
import '../../styles/Quizzz.css';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { CircularProgress } from '@mui/material';
import { setHasFetchedAttempts } from '../../app/redux/slices/quizSlice';

// Utility function to shuffle array
const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Quizzz = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]); // Track selected options
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // Store shuffled questions
  const { questions, quizID, hasFetchedQuestions } = useSelector((state) => state.quiz);
  const { loading, saveAttempt, getQuestions } = useQuizDetails();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (quizID && !hasFetchedQuestions) {
      console.log('Fetching questions for quizID:', quizID);
      getQuestions({ quiz_id: quizID });
    }
  }, [quizID, hasFetchedQuestions, getQuestions]);

  useEffect(() => {
    if (questions.length > 0) {
      const shuffled = questions.map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      }));
      setShuffledQuestions(shuffled);
    }
  }, [questions]);

  const submitQuiz = async () => {
    const details = shuffledQuestions.map((question) => {
      const selectedOption = selectedOptions.find(option => option.question_id === question.id);
      return {
        question_id: question.id,
        option_id: selectedOption ? selectedOption.option_id : null,
        content: '',
        order: question.options.map(option => option.id) // Save the shuffled order of option IDs
      };
    });

    // Check if all questions are answered
    const allAnswered = details.every(detail => detail.option_id !== null);

    if (!allAnswered) {
      alert('Please answer all the questions before submitting.');
      return;
    }

    const payload = {
      user_id: 1,
      quiz_id: quizID,
      details
    };

    try {
      dispatch(setHasFetchedAttempts(false));
      await saveAttempt(payload);
      setResult(true);
    } catch (error) {
      console.error('Error saving attempt:', error);
    }
  };

  const checkAnswer = (optionIndex, questionIndex) => {
    if (!selectedOptions.find(option => option.question_id === shuffledQuestions[questionIndex].id)) {
      const selectedOptionId = shuffledQuestions[questionIndex].options[optionIndex].id;
      const questionId = shuffledQuestions[questionIndex].id;

      // Update the selected option for the current question
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        { question_id: questionId, option_id: selectedOptionId }
      ]);

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
        <div className="bg-[#f0fcff] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px]">
          <h1>Quiz App</h1>
          <hr className="border-0 h-0.5 bg-[#707070]" />
          <h2 className="text-lg font-medium">
            Your score is: {score} out of {shuffledQuestions.length}
          </h2>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate('/quiz/attempts')}
              className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-sm w-60`}
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
      <div className="bg-[#f0fcff] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px] overflow-y-scroll">
        <h1>Quiz App</h1>
        <hr className="border-0 h-0.5 bg-[#707070]" />
        {shuffledQuestions.map((question, questionIndex) => (
          <div key={question.id} className="mb-10">
            <h2 className="text-lg font-medium">
              {questionIndex + 1}. {question.content}
            </h2>
            <ul>
              {question.options.map((option, optionIndex) => {
                let className = "flex items-center h-12 px-4 border border-[#686868] rounded-lg mb-5 text-sm cursor-pointer";
                const selectedOption = selectedOptions.find(option => option.question_id === question.id);

                if (selectedOption) {
                  if (option.id === selectedOption.option_id) {
                    className += option.is_correct ? ' correct' : ' wrong';
                  } else if (option.is_correct) {
                    className += ' correct';
                  }
                }

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
            className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-sm w-24`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quizzz;
