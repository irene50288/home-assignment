import lightPalette from './lightPalette';
import darkPalette from './darkPalette';

const getThemeSetup = (mode) => ({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background,
          paddingLeft: '99px',
          paddingRight: '99px'
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFF',
          textTransform: 'none',
          borderRadius: 0,
          fontFamily: 'Open Sans',
          fontSize: '14px',
          fontWeight: 600,
          backgroundColor: '#FE7139',
          marginBottom: '50px',
          '&:hover': {
            backgroundColor: '#FE7139'
          }
        }
      }
    }
  },
  palette: {
    mode,
    ...(mode === 'dark' ? darkPalette : lightPalette)
  }
});

export default getThemeSetup;
