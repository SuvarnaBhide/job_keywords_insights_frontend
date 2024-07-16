/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../../styles/index.css';
import '../../styles/QuizType.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CodeIcon } from '../../assets/code_icon.svg';
import { CircularProgress } from '@mui/material';


const AttemptInfo = ({attempt, attemptIndex, loading}) => {

    const navigate = useNavigate();

    const newViewTab = (attemptIndex) => {
        navigate(`/quiz/attemptdetails?attemptIndex=${attemptIndex}/`);
    };
    
    const CircularProgressStyled = () => {
        return (
            <CircularProgress
              style={{
                position: 'absolute',
                width: 15,
                height: 15,
                margin: '5px',
                marginTop: '2px'
              }}
            />
        );
      };

  return (
    <div
        class="relative block overflow-hidden bg-[#bedbb8] rounded-lg p-4 sm:p-6 lg:p-8"
        >
        
        <div class="sm:flex sm:flex-col sm:justify-between sm:gap-4">
            <div class="hidden sm:block sm:shrink-0">
                <CodeIcon
                    class="size-12 rounded-lg object-cover shadow-sm bg-[#b4e9df]"
                />
            </div>
            <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                {attempt.quizName}
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600"><strong>Date & Time: </strong>
                {loading ? 
                    CircularProgressStyled() : <>{attempt.attemptDate}</>
                }
            </p>
            </div>
        </div>

        {/* <div class="mt-4">
            <p class="text-pretty text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
            maiores deleniti consectetur nobis et eaque.
            </p>
        </div> */}

        <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-700">
                {
                    loading ? CircularProgressStyled() : <>{attempt.quizScore}</>
                }
                </dt>
                <dd class="text-xs text-gray-600">Score</dd>
            </div>

            <div class="flex flex-col-reverse">
                <dt onClick={() => newViewTab(attemptIndex)} class="text-sm font-medium text-gray-700 cursor-pointer underline hover:text-black">
                {
                    loading ? CircularProgressStyled() : <>View Details</>
                }
                </dt>
                <dd class="text-xs text-gray-600">Results</dd>
            </div>
        </dl>
    </div>
  )
};
  
export default AttemptInfo;