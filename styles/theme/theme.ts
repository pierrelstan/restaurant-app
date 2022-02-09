import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#637381',
    },
    secondary: {
      main: '#FFB577',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#19161B',
    },
  },
});

export default theme;
