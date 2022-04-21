import { DarkTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

export const darkTheme = {
  ...DarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};
