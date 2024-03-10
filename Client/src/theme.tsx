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
    customBlue: Palette['primary'];
    customRose: Palette['primary'];
    customPurple: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: Partial<TypeNeutral>;
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
    containedRoundedIcon: true;
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
        }
      }
    }
  }
});

export default theme;
