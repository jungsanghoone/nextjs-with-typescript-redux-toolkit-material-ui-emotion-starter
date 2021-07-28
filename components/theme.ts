/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
const theme = {
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    body1: {
      fontSize: '0.9375rem',
    },
    fontFamily: [
      '"Noto Sans KR"',
      'Roboto',
      '"Helvetica"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key];
};

declare module '@material-ui/core/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export default createTheme(theme);
