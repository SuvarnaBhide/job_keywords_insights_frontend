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
import { Tooltip, useTheme } from "@mui/material";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { setQuizID, setQuizScore } from "../../app/redux/slices/quizSlice";

const Sidebar = () => {

  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Menu items for the sidebar containing the labels, logos and links to different pages
  const Menus = [
    { title: "Job Keywords", src: keywordsLogo, link: "/trending_job_keywords/all_keywords" },
    { title: "Quiz", src: quizLogo, link: "/quiz/", gap: true },
    { title: "Payments", src: paymentsLogo, link: "/payments/"},
    { title: "Settings", src: settingsLogo, link: "/settings/" },
  ];

  const resetData = (link) => {

    // Reset keyword-related data only if the 'Job Keywords' menu item is clicked
    if(link === "/trending_job_keywords/all_keywords") {
      dispatch(setKeywordDetails([]));
      dispatch(setKeyword(''));
    }

    // Reset quiz-related data only if the 'Quiz' menu item is clicked
    if (link === "/quiz/") {
      dispatch(setQuizID(null));
      dispatch(setQuizScore('0/0'));
    }
  };

  return (
    <React.Fragment>
      <div
        className={`${open ? "w-72" : "w-20 "} bg-[${theme.palette.sidebar.background}] h-screen relative top-0 left-0 pt-8 duration-300`}
        style={{ backgroundColor: theme.palette.sidebar.background }}
      >
        <img
          height="25px" width="25px"
          alt="control"
          src={drawerLogo}
          className={`absolute cursor-pointer right-5 top-9`}
          onClick={() => setOpen(!open)}
        />
        <ul className="pt-8 mt-4">
          {Menus.map((Menu, index) => (
            <React.Fragment key={index}>
              <Link to={Menu.link} className='no-underline' onClick={() => resetData(Menu.link)}>
                <Tooltip title={Menu.title} placement="right">
                  <li
                    className={`flex px-5 py-3 cursor-pointer hover:bg-[#335E68] text-[${theme.palette.sidebar.text}] text-sm font-semibold items-center gap-x-4 
                      ${Menu.gap ? "mt-2" : "mt-2"}  ${location.pathname.includes(Menu.link) && `bg-[${theme.palette.sidebar.selectedMenu}]`} `}
                    style={{ 
                      backgroundColor: location.pathname.includes(Menu.link) && theme.palette.sidebar.selectedMenu,
                      color: theme.palette.sidebar.text,
                      hover: { backgroundColor: theme.palette.sidebar.hover }
                    }}
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
              {Menu.gap && <hr className={`border-t-2 border-[${theme.palette.sidebar.hover}] my-8 mx-2`} />}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Sidebar;
