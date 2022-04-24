import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppStack from './navigation/AppStack';
import { ThemeContextWrapper } from './context/themeContext';
import { AppProvider } from './providers/AppProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2000,
    },
  },
});

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ThemeContextWrapper>
      <AppProvider>
        <AppStack />
      </AppProvider>
    </ThemeContextWrapper>
  </QueryClientProvider>
);

export default App;
