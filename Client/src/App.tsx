import { lazy, type FC, Suspense } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SplashScreen from './pages/Onboarding/SplashScreen';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
const OnboardingPage = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await import('./pages/Onboarding/OnboardingPage');
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FE7E00',
      contrastText: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans' ,'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: {
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: 1.66,
      textTransform: 'none'
    },
    subtitle3: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.25
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle3: 'div'
        }
      }
    }
  }
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
        element: <h1>LoginPage</h1>
      }
    ]
  }
]);

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
