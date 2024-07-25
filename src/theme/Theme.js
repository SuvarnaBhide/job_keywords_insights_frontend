/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material';
import MuiOverrides from './muiOverrides/';
import GlobalStyles from './globalStyles';
import palette from './palette';

ThemeSettings.propTypes = {
  children: PropTypes.node
};

export default function ThemeSettings({ children }) {
  const themeOptions = {
    typography: '',
    spacing: '',
    palette: palette('light')
  };

  let theme = createTheme(themeOptions);

  // theme = responsiveFontSizes(theme);
  theme.components = MuiOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
