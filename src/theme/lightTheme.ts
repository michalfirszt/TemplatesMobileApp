import { Colors, DefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: Colors.blue700,
    accent: Colors.grey500,
    black: Colors.black,
    white: Colors.white,
  },
  spaceUnit: 8,
};
