import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ThemeProvider } from 'react-native-paper';

import { lightTheme } from './theme';
import AppStack from './navigation/AppStack';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
