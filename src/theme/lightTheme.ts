import { Colors, DefaultTheme } from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blue700,
  },
  spaceUnit: 8,
};

export default lightTheme;
