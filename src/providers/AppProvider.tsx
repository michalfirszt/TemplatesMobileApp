import React, { useContext, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ThemeProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { darkTheme, lightTheme } from '../theme';
import { ThemeContext } from '../context/themeContext';

export const AppProvider = ({ children }): JSX.Element => {
  const { isThemeDark } = useContext(ThemeContext);

  const theme = useMemo(
    () => (isThemeDark ? darkTheme : lightTheme),
    [isThemeDark],
  );

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
