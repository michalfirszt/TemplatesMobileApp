import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import { darkTheme, lightTheme } from '../../theme';

type ContextValues = {
  isThemeDark: boolean;
  setIsThemeDark: Dispatch<SetStateAction<boolean>>;
  theme: object;
};

export const ThemeContext = createContext<ContextValues>({
  isThemeDark: false,
  setIsThemeDark: () => {},
  theme: lightTheme,
});

export const ThemeProvider = ThemeContext.Provider;

export const ThemeContextWrapper = ({ children }): JSX.Element => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);

  return (
    <ThemeProvider
      value={{
        isThemeDark,
        setIsThemeDark,
        theme: isThemeDark ? darkTheme : lightTheme,
      }}>
      {children}
    </ThemeProvider>
  );
};
