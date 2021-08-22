// Global styles can be moved to a separate file for ease of maintenance.
export const globalOverrides = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: 0,
          padding: 0,
          height: '100%'
        },
        body: {
          margin: 0,
          padding: 0,
          height: '100%',
          fontSize: '1rem',
          backgroundColor: '#fff'
        }
      }
    }
  }
}

export const typography = {
  typography: {
    fontFamily: [
      'Tamil Sangam MN',
      'Oswald',
      'Arial',
      'sans-serif'
    ].join(',')
  }
}

export const defaultTheme = {
  palette: {
    primary: {
      light: '#bf1f34',
      main: '#990015',
      dark: '#750212',
      contrastText: '#E4F1F0'
    },
    secondary: {
      main: '#2795B7',
      contrastText: '#fff'
    },
    warning: {
      light: '#FEF5B2',
      main: '#C79C36',
      dark: '#814E22'
    },
    success: {
      light: '#DEF7EC',
      main: '#3C763D',
      dark: '#2D6C59'
    },
    default: {
      main: '#fff',
      contrastText: '#9999'
    },
    grey: {
      50: '#F2F6FF',
      150: '#F9FAFC',
      200: '#E6EBF1',
      250: '#98A5BA'
    }
  }
}
