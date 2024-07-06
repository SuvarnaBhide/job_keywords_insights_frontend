/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import '../../styles/index.css';
import '../../styles/Quizzz.css';
import { data } from '../../assets/data';

const Quizzz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const optionRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  const handleNextClick = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(prevIndex => prevIndex + 1);
      setLock(false);
      optionRefs.current.forEach(ref => {
        ref.current.classList.remove('correct', 'wrong');
      });
    }
  };

  const checkAnswer = (e, answerIndex) => {
    if (!lock) {
      const isCorrect = data[index].ans === answerIndex;
      e.target.classList.add(isCorrect ? 'correct' : 'wrong');
      if (isCorrect) setScore(prevScore => prevScore + 1);
      setLock(true);
      optionRefs.current[data[index].ans].current.classList.add('correct');
    }
  };

  if (result) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#f0fcff] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px]">
          <h1>Quiz App</h1>
          <hr className="border-0 h-0.5 bg-[#707070]"/>
          <h2 className="text-lg font-medium">Your score is: {score} out of {data.length}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-[#f0fcff] text-black flex flex-col gap-5 rounded-xl p-10 w-[700px] max-w-[700px] h-[550px]">
        <div className="flex justify-between">
          <h1>Quiz App</h1>
          <h1>{index + 1} of {data.length} questions</h1>
        </div>
        <hr className="border-0 h-0.5 bg-[#707070]" />
        <h2 className="text-lg font-medium">{index + 1}. {data[index].question}</h2>
        <ul>
          {Object.keys(data[index].options).map(optionIndex => (
            <li
              key={optionIndex}
              ref={optionRefs.current[optionIndex]}
              onClick={(e) => checkAnswer(e, Number(optionIndex))}
              className="flex items-center h-12 px-4 border border-[#686868] rounded-lg mb-5 text-sm cursor-pointer"
            >
              {data[index].options[optionIndex]}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleNextClick}
            className={`bg-[#1890D4] hover:bg-[#1890D4] text-white font-semibold py-2 px-4 rounded text-sm w-24 ${!lock ? 'opacity-50 cursor-not-allowed' : ''}`}
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
