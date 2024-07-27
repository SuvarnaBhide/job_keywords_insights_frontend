import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTabs } from '../../../app/hooks/useTab';
import { useTheme } from '@mui/material';

export default function CustomTabs(props) {
  const { tabs } = props;
  const { currentTab, handleSetCurrentTab } = useTabs();
  const theme = useTheme();

  const handleTabChange = (event, newTab) => {
    handleSetCurrentTab(newTab);
  };

  return (
    <Box className={`w-full pt-5 border-b`} style={{ borderColor: theme.palette.border.greyPrimary }}>
      <Tabs value={currentTab} onChange={handleTabChange} aria-label="navigation tabs">
        {tabs?.length
          ? tabs.map((tab, index) => (
              <Tab
                className={index === 0 ? 'py-2.5 pr-4' : ''}
                key={tab.tabName}
                value={tab.tabName}
                label={tab.tabLabel}
              />
            ))
          : null}
      </Tabs>
    </Box>
  );
}
