'use client';

import { createTheme } from '@mui/material';

const getCssVariable = (variableName: string, fallback: string) => {
  if (typeof window !== 'undefined' && document?.documentElement) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim() || fallback;
  }
  return fallback;
};

let theme = createTheme({});

theme = createTheme(theme, {
  cssVariables: true,
  palette: {
    primary: {
      main: getCssVariable('--green', '#4caf50'),
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: getCssVariable('var(--secondary)', '#757575'),
      contrastText: "#FFFFFF",
    },
    background: {
      default: getCssVariable('var(--secondary)', '#F4F7F1'),
      paper: "#FFFFFF",
    },
    text: {
      primary: getCssVariable('var(--primary)', '#212121'),
      secondary: getCssVariable('var(--secondary)', '#757575'),
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