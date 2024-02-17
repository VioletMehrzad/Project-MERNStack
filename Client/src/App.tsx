import { type FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import router from './router';
import theme from './theme';
import StyledSnackbar from './components.tsx/StyledSnackbar';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        autoHideDuration={3000}
        dense
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        style={{
          borderRadius: '0.75rem'
        }}
        Components={{
          warning: StyledSnackbar,
          info: StyledSnackbar
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
