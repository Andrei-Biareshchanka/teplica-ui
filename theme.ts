'use client';

import { createTheme } from '@mui/material';

let theme = createTheme({});

theme = createTheme(theme, {
  cssVariables: true,
  palette: {
    primary: {
      main: 'var(--green)', // Цвет по умолчанию
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: 'var(--secondary)',
      contrastText: "#FFFFFF",
    },
    background: {
      default: 'var(--green-light)',
      paper: "#FFFFFF",
    },
    text: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
    },
  },
  zIndex: {
    appBar: 1200, // Уровень zIndex для AppBar
    drawer: 1100, // Уровень zIndex для выдвижных панелей
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;