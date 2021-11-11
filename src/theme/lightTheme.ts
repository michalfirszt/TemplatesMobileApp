import { Colors, DefaultTheme } from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blue700,
  },
};

export default lightTheme;
