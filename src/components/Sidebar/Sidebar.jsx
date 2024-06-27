/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import '../../styles/index.css';
import '../../styles/Sidebar.css';
import mainLogo from '../../assets/logo.png';
import settingsLogo from '../../assets/settings.svg';
import controlLogo from '../../assets/control.png';
import { Tooltip } from "@mui/material";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const Menus = [
    { title: "Trending Job Keywords", src: settingsLogo, link: "/trending_job_keywords/all_keywords" }
  ];

  return (
    <React.Fragment>
      <div
        className={`${open ? "w-72" : "w-20 "} bg-[#1A4751] h-screen relative top-0 left-0 p-5  pt-8 duration-300`}
      >
        <img
          alt="control"
          src={controlLogo}
          className={`absolute cursor-pointer right-2 top-9 w-7 border-dark-purple opacity-50
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            alt="logo"
            src={mainLogo}
            className={`cursor-pointer duration-500 opacity-70 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Job Insights
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.link} className='no-underline'>
              <Tooltip key={index} title={Menu.title} placement="right">
                <li
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-[#51808B] text-gray-300 text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"}  ${location.pathname === Menu.link && "bg-[#51808B]"} `}
                >
                  <img src={Menu.src} height="25px"width="25px" alt="" />
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
