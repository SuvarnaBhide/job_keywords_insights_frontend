/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword, setKeywordDetails } from '../../app/redux/slices/keywordsSlice';
import '../../styles/index.css';
import '../../styles/Sidebar.css';
import settingsLogo from '../../assets/settings.png';
import quizLogo from '../../assets/quiz.png';
import keywordsLogo from '../../assets/keywords.png';
import drawerLogo from '../../assets/drawer.png';
import paymentsLogo from '../../assets/payments.png';
import { Tooltip } from "@mui/material";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { setQuizID, setQuizScore } from "../../app/redux/slices/quizSlice";
import { setHasFetchedAttempts, setHasFetchedQuestions } from "../../app/redux/slices/quizSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const Menus = [
    { title: "Job Keywords", src: keywordsLogo, link: "/trending_job_keywords/all_keywords" },
    // { title: "Data Storage", src: controlLogo, link: "/data_storage/" },
    { title: "Quiz", src: quizLogo, link: "/quiz/", gap: true },
    { title: "Payments", src: paymentsLogo, link: "/payments/"},
    { title: "Settings", src: settingsLogo, link: "/settings/" },
  ];

  const resetData = (link) => {
    dispatch(setKeywordDetails([]));
    dispatch(setKeyword(''));
    dispatch(setQuizScore('0/0'));

    // Reset quizID only if the 'Quiz' menu item is clicked
    if (link === "/quiz/") {
      dispatch(setQuizID(null));
      // dispatch(setHasFetchedAttempts(false));
      // dispatch(setHasFetchedQuestions(false));
    }
  };

  return (
    <React.Fragment>
      <div
        className={`${open ? "w-72" : "w-20 "} bg-[#1A4751] h-screen relative top-0 left-0 pt-8 duration-300`}
      >
        <img
          height="25px" width="25px"
          alt="control"
          src={drawerLogo}
          className={`absolute cursor-pointer right-5 top-9`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {/* <img
            alt="logo"
            src={mainLogo}
            className={`cursor-pointer duration-500 opacity-70 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Job Insights
          </h1> */}
        </div>
        <ul className="pt-8 mt-4">
          {Menus.map((Menu, index) => (
            <React.Fragment key={index}>
              <Link to={Menu.link} className='no-underline' onClick={() => resetData(Menu.link)}>
                <Tooltip title={Menu.title} placement="right">
                  <li
                    className={`flex px-5 py-3 cursor-pointer hover:bg-[#335E68] text-[#E6E6E6] text-sm font-semibold items-center gap-x-4 
                      ${Menu.gap ? "mt-2" : "mt-2"}  ${location.pathname.includes(Menu.link) && "bg-[#51808B]"} `}
                  >
                    <img 
                      src={Menu.src} 
                      height="25px"
                      width="25px"  
                      alt="" 
                    />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                      {Menu.title}
                    </span>
                  </li>
                </Tooltip>
              </Link>
              {Menu.gap && <hr className="border-t-2 border-[#335E68] my-8 mx-2" />}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Sidebar;
