import { CssBaseline, Container } from '@mui/material';
import { Suspense, lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SplashScreen from './pages/Onboarding/SplashScreen';
const OnboardingPage = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await import('./pages/Onboarding/OnboardingPage');
});

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
        element: (
          <Suspense fallback={<SplashScreen />}>
            <OnboardingPage />
          </Suspense>
        )
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
]);

export default router;
