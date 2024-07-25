import AppRoutes from './app/routes/AppRoutes.jsx';
import { Grid } from '@mui/material';
import ThemeSettings from './theme/Theme.js';
import { withTabs } from './app/context/TabsContext';

function App({ instance }) {
  return (
    <Grid flexDirection={'row'} className="flex flex-row">
      <ThemeSettings>
        <AppRoutes />
      </ThemeSettings>
    </Grid>
  );
}

export default withTabs(App);
