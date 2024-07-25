/* Custom hook for managing and synchronizing tab state with URL changes. */

import { useContext, useEffect } from 'react';
import { TabsContext } from '../context/TabsContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const useTabs = () => {
  const { currentTab, setCurrentTab } = useContext(TabsContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSetCurrentTab = (tab) => {
    navigate(tab.toLowerCase(), { replace: true });
    setCurrentTab(tab);
  };

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('quizzes') || path.includes('quizdetails') || path.includes('quizzz')) {
      setCurrentTab('Quizzes');
    } else if (path.includes('attempts') || path.includes('attemptdetails')) {
      setCurrentTab('Attempts');
    }
  }, [location, setCurrentTab]);

  if (!TabsContext) {
    throw new Error('useTabs should be used inside a TabsProvider');
  }

  return { currentTab, handleSetCurrentTab };
};
