import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fs12: React.CSSProperties;
    fs14: React.CSSProperties;
    fs18: React.CSSProperties;
    fs20: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    fs12?: React.CSSProperties;
    fs14?: React.CSSProperties;
    fs18?: React.CSSProperties;
    fs20?: React.CSSProperties;
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
    tertiary: Palette['primary'];
    customBlue: Palette['primary'];
    customRose: Palette['primary'];
    customPurple: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: Partial<TypeNeutral>;
    tertiary?: PaletteOptions['primary'];
    customBlue?: PaletteOptions['primary'];
    customRose?: PaletteOptions['primary'];
    customPurple?: PaletteOptions['primary'];
  }

  interface BreakpointOverrides {
    mobile: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fs12: true;
    fs14: true;
    fs18: true;
    fs20: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    outlinedIcon: true;
    containedIcon: true;
    containedRoundedIcon: true;
  }

  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    customRose: true;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 376
    }
  },
  palette: {
    primary: {
      main: '#FE7E00',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#0AC9BD',
      contrastText: '#FFFFFF'
    },
    tertiary: {
      main: '#F4F8FF',
      light: '#f6f9ff',
      dark: '#aaadb2',
      contrastText: '#041330'
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
      lineHeight: 1.25,
      textTransform: 'none'
    },
    fs12: {
      fontSize: '0.75rem',
      lineHeight: 1.25,
      letterSpacing: '-0.3px'
    },
    fs14: {
      fontSize: '0.875rem',
      lineHeight: 1.25,
      letterSpacing: '-0.3px'
    },
    fs18: {
      fontSize: '1.125rem',
      lineHeight: 1.25,
      letterSpacing: '-0.3px'
    },
    fs20: {
      fontSize: '1.25rem',
      lineHeight: 1.25,
      letterSpacing: '-0.3px'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          fs12: 'p',
          fs14: 'p',
          fs18: 'p',
          fs20: 'p'
        }
      }
    }
  }
});

theme = createTheme(theme, {
  palette: {
    text: {
      primary: theme.palette.neutral.midnightBlue
    },
    customBlue: theme.palette.augmentColor({
      color: {
        main: '#255CE7'
      },
      name: 'customBlue'
    }),
    customRose: theme.palette.augmentColor({
      color: {
        main: '#EC3476'
      },
      name: 'customRose'
    }),
    customPurple: theme.palette.augmentColor({
      color: {
        main: '#9747FF'
      },
      name: 'customPurple'
    })
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1.5)
        }
      },
      variants: [
        {
          props: { variant: 'containedIcon' },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: theme.spacing(2),
            minWidth: 'auto',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: theme.shadows[3]
            },
            '&:active': {
              boxShadow: theme.shadows[5]
            }
          }
        },
        {
          props: { variant: 'containedIcon', size: 'small' },
          style: {
            padding: theme.spacing(0.5),
            borderRadius: theme.spacing(1)
          }
        },
        {
          props: { variant: 'containedIcon', color: 'secondary' },
          style: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark
            }
          }
        },
        {
          props: { variant: 'containedIcon', color: 'tertiary' },
          style: {
            backgroundColor: theme.palette.tertiary.main,
            color: theme.palette.tertiary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.tertiary.dark
            }
          }
        },
        {
          props: { variant: 'outlinedIcon' },
          style: {
            border: `1px solid ${theme.palette.neutral.tropicalBlue}`,
            padding: theme.spacing(2),
            minWidth: 'auto',
            '&:hover': {
              borderColor: theme.palette.neutral.midnightBlue
            }
          }
        },
        {
          props: { variant: 'containedRoundedIcon' },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: theme.spacing(2),
            borderRadius: '50%',
            minWidth: 'auto',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: theme.shadows[3]
            },
            '&:active': {
              boxShadow: theme.shadows[5]
            }
          }
        },
        {
          props: { variant: 'containedRoundedIcon', color: 'tertiary' },
          style: {
            backgroundColor: theme.palette.tertiary.main,
            color: theme.palette.tertiary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.tertiary.dark
            }
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
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: theme.palette.neutral.greyBlue
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: theme.spacing(1.5)
        },
        outlined: {
          borderColor: theme.palette.neutral.tropicalBlue
        }
      }
    }
  }
});

export default theme;
