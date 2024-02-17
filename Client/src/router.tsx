import { CssBaseline, Container } from '@mui/material';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import OnboardingPage from './pages/Onboarding/OnboardingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <CssBaseline />
        <Container maxWidth="xs" disableGutters>
          <Outlet />
        </Container>
      </>
    ),
    children: [
      {
        path: '/',
        element: <OnboardingPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
]);

export default router;
