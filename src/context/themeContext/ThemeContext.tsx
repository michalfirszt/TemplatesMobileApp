import React, { createContext, useCallback, useEffect, useState } from 'react';
import { isString } from 'lodash';

import { darkTheme, lightTheme } from '../../theme';
import { storageTools } from '../../utilities';

type ContextValues = {
  isThemeDark: boolean;
  toggleIsThemeDark: () => void;
  theme: object;
};

export const ThemeContext = createContext<ContextValues>({
  isThemeDark: false,
  toggleIsThemeDark: () => {},
  theme: lightTheme,
});

export const ThemeProvider = ThemeContext.Provider;

export const ThemeContextWrapper = ({ children }): JSX.Element => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);

  const toggleIsThemeDark = useCallback(() => {
    setIsThemeDark(!isThemeDark);
    storageTools.storeData('@isThemeDark', !isThemeDark);
  }, [isThemeDark]);

  useEffect(() => {
    const initialTheme = storageTools.getData('@isThemeDark');

    initialTheme.then((response) => {
      if (isString(response)) {
        setIsThemeDark(response === 'true');
      }
    });
  }, []);

  return (
    <ThemeProvider
      value={{
        isThemeDark,
        toggleIsThemeDark,
        theme: isThemeDark ? darkTheme : lightTheme,
      }}>
      {children}
    </ThemeProvider>
  );
};
