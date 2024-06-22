import React, { useState } from 'react';
import '../styles/Sidebar.css';
import settingsLogo from '../assets/settings.svg';
import helpLogo from '../assets/help_icon.png';
import feedbackLogo from '../assets/feedback_icon.png';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const SidebarMenuItem = (props) => {
  const { link, menuItemName, logo, isOpen } = props;
  const location = useLocation();

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <div
        className={`sidebar__menuitem ${
          location.pathname.includes(link) ? 'selected__menuitem' : ''
        } ${!isOpen ? 'sidebar__menuitem__closed' : ''}`}
      >
        <Tooltip title={menuItemName} placement="right">
          <img src={logo} alt={`${menuItemName} logo`} />
        </Tooltip>
        {isOpen && <p>{menuItemName}</p>}
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { link: '/trending_job_keywords', menuItemName: 'Trending Keywords', logo: settingsLogo },
  ];

  return (
    <React.Fragment>
      <div className={`sidebar ${open ? '' : 'sidebar__close'}`}>
        <div className="sidebar__container">
          <div>
            {/* <div className={`sidebar__logo ${open ? '' : 'sidebar__logo__closed'}`}>
              {open ? <img src={projectLogo} /> : <img src={projectLogoSmall} />}
            </div> */}

            <div className="sidebar__menu">
              {menuItems.map((menuItem) => (
                <SidebarMenuItem
                  key={menuItem.menuItemName}
                  link={menuItem.link}
                  menuItemName={menuItem.menuItemName}
                  logo={menuItem.logo}
                  isOpen={open}
                />
              ))}
            </div>
          </div>
          {open ? (
            <div className="sidebar_actionButtons__container">
              <div
                className="actionButtons"
                onClick={() => window.open('https://mopinion.com/31-website-feedback-tools-an-overview-and-comparison/', '_blank')}
              >
                <img
                  src={feedbackLogo}
                  alt='feedback icon'
                  style={{ width: '23px', height: '23px', marginRight: '9px' }}
                />
                <p>Feedback</p>
              </div>
              <div
                className="actionButtons"
                onClick={() => window.open('https://www.helpguide.org/', '_blank')}
              >
                <img
                  src={helpLogo}
                  alt='feedback icon'
                  style={{ width: '20px', height: '20px', marginRight: '12px' }}
                />
                <p>Help</p>
              </div>
            </div>
          ) : (
            <div className="sidebar_actionButtons__container__closed">
              <div className="actionButtons__closed" onClick={() => navigate('/onboard')}>
                <Tooltip title={'Feedback'} placement="right">
                  <img
                    src={feedbackLogo}
                    style={{ width: '23px', height: '23px' }}
                    alt="feedback icon"
                  />
                </Tooltip>
              </div>
              <div className="actionButtons__closed" onClick={() => navigate('/onboard')}>
                <Tooltip title={'Help'} placement="right">
                  <img src={helpLogo} style={{ width: '20px', height: '20px' }} alt="help icon" />
                </Tooltip>
              </div>
            </div>
          )}
        </div>

        <div className={`sidebar__action__icon ${open ? '' : 'sidebar__action__icon__close'}`}>
          {open ? (
            <ChevronLeft
              sx={{ color: '#13293d', cursor: 'pointer' }}
              onClick={() => setOpen(false)}
            />
          ) : (
            <ChevronRight
              sx={{ color: '#13293d', cursor: 'pointer' }}
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Sidebar;
