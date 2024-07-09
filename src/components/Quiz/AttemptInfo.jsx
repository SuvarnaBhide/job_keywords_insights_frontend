/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../../styles/index.css';
import '../../styles/QuizType.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CodeIcon } from '../../assets/code_icon.svg';


const AttemptInfo = ({attempt, attemptIndex}) => {

    const navigate = useNavigate();

    const newViewTab = (attemptIndex) => {
        // Use an absolute path
        navigate(`attemptdetails?attemptIndex=${attemptIndex}`);
        // window.open(`attemptdetails?attemptIndex=${attemptIndex}`, '_blank');
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

            <p class="mt-1 text-xs font-medium text-gray-600"><strong>Date & Time: </strong>{attempt.attemptDate}</p>
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
            <dt class="text-sm font-medium text-gray-700">{attempt.quizScore}</dt>
            <dd class="text-xs text-gray-600">Score</dd>
            </div>

            <div class="flex flex-col-reverse">
                <dt onClick={() => newViewTab(attemptIndex)} class="text-sm font-medium text-gray-700 cursor-pointer underline hover:text-black">View Details</dt>
                <dd class="text-xs text-gray-600">Results</dd>
            </div>

            {/* <button className = "bg-[#bedbb8] p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#a7cf99] cursor-pointer" >View</button> */}
        </dl>
    </div>
  )
};
  
export default AttemptInfo;