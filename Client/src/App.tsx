import { lazy, type FC, Suspense } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SplashScreen from './pages/Onboarding/SplashScreen';
import { Container, CssBaseline, ThemeProvider, createTheme, styled } from '@mui/material';
import LoginPage from './pages/LoginPage/LoginPage';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
const OnboardingPage = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await import('./pages/Onboarding/OnboardingPage');
});

const styledSnackbar = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-warning': {
    backgroundColor: '#EC3476'
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: '#041330'
  }
}));

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
  }

  export interface TypeNeutral {
    darkPurple: string;
    midnightBlue: string;
    clayBlue: string;
    charcoalBlue: string;
    greyBlue: string;
    tropicalBlue: string;
    aliceBlue: string;
    softPurple: string;
  }

  interface Palette {
    neutral: TypeNeutral;
  }

  interface PaletteOptions {
    neutral?: Partial<TypeNeutral>;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}
declare module '@mui/material/Box' {
  interface BoxPropsColorOverrides {
    aliceBlue: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    outlinedIcon: true;
    containedIconCircular: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#FE7E00',
      contrastText: '#FFFFFF'
    },
    background: {
      paper: '#fff',
      default: '#fff'
    },
    neutral: {
      darkPurple: '#3A267A',
      midnightBlue: '#041330',
      clayBlue: '#1D2A44',
      charcoalBlue: '#39455C',
      greyBlue: '#5B6E95',
      tropicalBlue: '#D0DAEE',
      aliceBlue: '#F4F8FF',
      softPurple: '#F2EEFF'
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
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle3: 'div'
        }
      }
    }
  }
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1.5)
        }
      },
      variants: [
        {
          props: { variant: 'outlinedIcon' },
          style: {
            border: `1px solid ${theme.palette.neutral.tropicalBlue}`,
            color: theme.palette.neutral.midnightBlue,
            padding: theme.spacing(2),
            minWidth: 'auto',
            '&:hover': {
              borderColor: theme.palette.neutral.midnightBlue
            }
          }
        },
        {
          props: { variant: 'containedIconCircular' },
          style: {
            backgroundColor: theme.palette.neutral.aliceBlue,
            padding: theme.spacing(2),
            borderRadius: '50%',
            minWidth: 'fit-content'
          }
        }
      ]
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1.5),
          color: theme.palette.neutral.midnightBlue
        },
        notchedOutline: {
          borderColor: theme.palette.neutral.tropicalBlue
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: theme.spacing(1.5),
          color: theme.palette.neutral.midnightBlue
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: theme.spacing(1.5),
          fontWeight: 500,
          color: theme.palette.neutral.greyBlue
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
        element: <LoginPage />
      }
    ]
  }
]);

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
          warning: styledSnackbar,
          info: styledSnackbar
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
