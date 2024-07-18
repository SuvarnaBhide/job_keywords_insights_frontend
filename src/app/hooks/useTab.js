import { useContext, useEffect } from 'react';
import { TabsContext } from '../context/TabsContext';
import { useNavigate } from 'react-router-dom';

export const useTabs = () => {
  const { currentTab, setCurrentTab } = useContext(TabsContext);
  const navigate = useNavigate();

  const handleSetCurrentTab = (tab) => {
    navigate(tab.toLowerCase(), { replace: true });
    setCurrentTab(tab);
  };

  useEffect(() => {
    if (window?.location?.pathname.toLowerCase().includes('quizzes')) {
      setCurrentTab('Quizzes');
    }
    if (window?.location?.pathname.toLowerCase().includes('quizdetails')) {
      setCurrentTab('QuizDetails');
    }
    if (window?.location?.pathname.toLowerCase().includes('attempts')) {
        setCurrentTab('Attempts');
    }
    if (window?.location?.pathname.toLowerCase().includes('attemptdetails')) {
        setCurrentTab('AttemptDetails');
    }
    if (window?.location?.pathname.toLowerCase().includes('quizzz')) {
        setCurrentTab('Quizzz');
    }

  }, [setCurrentTab]);

  if (!TabsContext) {
    throw new Error('useTabs should be used inside TabsProvider');
  }

  return { currentTab, handleSetCurrentTab };
};
