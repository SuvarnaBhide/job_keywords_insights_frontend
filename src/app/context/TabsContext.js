/* eslint-disable react/display-name */
import React, { createContext, useState } from 'react';

const initialState = {
  currentTab: '',
  setCurrentTab: () => {}
};

export const TabsContext = createContext(initialState);

export const withTabs =
  (Component) =>
  ({ children, ...props }) => {
    const [currentTab, setCurrentTab] = useState();

    return (
      <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
        <Component {...props}>{children}</Component>
      </TabsContext.Provider>
    );
  };
