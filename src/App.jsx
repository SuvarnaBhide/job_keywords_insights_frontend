import AppRoutes from './app/routes/AppRoutes.jsx';
import { Grid } from '@mui/material';
import './styles/App.css'
import ThemeSettings from './theme/Theme.js';
import { withTabs } from './app/context/TabsContext';

function App({ instance }) {
  return (
    <Grid flexDirection={'row'} className="app">
      <ThemeSettings>
        <AppRoutes />
      </ThemeSettings>
    </Grid>
  );
}

export default withTabs(App);
