import AppRoutes from './app/routes/AppRoutes.jsx';
import { Grid } from '@mui/material';
import './styles/App.css'

function App({ instance }) {
  return (
    <Grid flexDirection={'row'} className="app">
      <AppRoutes />
    </Grid>
  );
}

export default App;
