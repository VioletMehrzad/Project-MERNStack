import { CssBaseline, Container } from '@mui/material';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import OnboardingPage from './pages/Onboarding/OnboardingPage';
import LoginPage from './pages/Authentication/LoginPage/LoginPage';
import RegisterPage from './pages/Authentication/RegisterPage/RegisterPage';
import MainPage from './pages/MainPages/MainPage';
import HomePage from './pages/MainPages/partials/HomePage/HomePage';
import DiscoverPage from './pages/MainPages/partials/DiscoverPage/DiscoverPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <CssBaseline />
        <Container maxWidth="mobile" disableGutters>
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
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/main',
        element: <MainPage />,
        children: [
          {
            path: '/main/home',
            element: <HomePage />
          },
          {
            path: '/main/discover',
            element: <DiscoverPage />
          },
          {
            path: '/main/wishlist',
            element: <HomePage />
          },
          {
            path: '/main/account',
            element: <HomePage />
          }
        ]
      }
    ]
  }
]);

export default router;
