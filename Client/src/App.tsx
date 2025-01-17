import { type FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import router from './router';
import theme from './theme';
import StyledSnackbar from './components/StyledSnackbar';
import ContextProvider from './helpers/states/ContextProvider';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import './styles.css';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <SnackbarProvider
          autoHideDuration={3000}
          dense
          anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
          style={{
            borderRadius: '0.75rem'
          }}
          Components={{
            warning: StyledSnackbar,
            info: StyledSnackbar,
            success: StyledSnackbar
          }}
        />
        <RouterProvider router={router} />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
