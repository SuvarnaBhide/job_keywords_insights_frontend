/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword, setKeywordDetails } from '../../app/redux/slices/keywordsSlice';
import '../../styles/index.css';
import '../../styles/Sidebar.css';
import mainLogo from '../../assets/logo.png';
import settingsLogo from '../../assets/settings.svg';
import controlLogo from '../../assets/control.png';
import drawerLogo from '../../assets/drawer.png';
import { Tooltip } from "@mui/material";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const Menus = [
    { title: "Job Keywords", src: settingsLogo, link: "/trending_job_keywords/all_keywords" },
    { title: "Data Storage", src: controlLogo, link: "/data_storage/" },
    { title: "Quiz", src: mainLogo, link: "/quiz/" },
  ];

  const resetKeywordData = () => {
    dispatch(setKeywordDetails([]));
    dispatch(setKeyword(''));
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
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.link} className='no-underline' onClick={resetKeywordData}>
              <Tooltip key={index} title={Menu.title} placement="right">
                <li
                  className={`flex p-5 cursor-pointer hover:bg-[#335E68] text-[#E6E6E6] text-sm font-semibold items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-5"}  ${location.pathname.includes(Menu.link) && "bg-[#51808B]"} `}
                >
                  <img src={Menu.src} height="20px"width="20px" alt="" />
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </li>
              </Tooltip>
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Sidebar;
