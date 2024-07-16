import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTabs } from '../../../app/hooks/useTab';

export default function CustomTabs(props) {
  const { tabs } = props;
  const { currentTab, handleSetCurrentTab } = useTabs();

  const handleTabChange = (event, newTab) => {
    handleSetCurrentTab(newTab);
  };

  return (
    <Box className="w-full pt-5 border-b border-[#e8f1f2]">
      <Tabs value={currentTab} onChange={handleTabChange} aria-label="navigation tabs">
        {tabs?.length
          ? tabs.map((tab, index) => (
              <Tab
                className={index === 0 ? 'py-2.5 pr-4' : ''}
                key={tab.tabName}
                value={tab.tabName}
                label={tab.tabName}
                // icon={currentTab === tab.tabName ? tab.icon : undefined}
                // iconPosition={currentTab === tab.tabName ? 'start' : undefined}
              />
            ))
          : null}
      </Tabs>
    </Box>
  );
}
