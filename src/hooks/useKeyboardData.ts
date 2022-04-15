import { useState, useRef, useEffect, useMemo } from 'react';
import { Keyboard, Platform } from 'react-native';
import { lightTheme } from '../theme';

type KeyboardData = {
  isKeyboardOpen: boolean;
  keyboardPaddingBottom: number;
};

export const useKeyboardData = (): KeyboardData => {
  const keyboardShowListener = useRef<any>(null);
  const keyboardHideListener = useRef<any>(null);

  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);

  const keyboardPaddingBottom = useMemo(
    () =>
      isKeyboardOpen && Platform.OS === 'ios' ? lightTheme.spaceUnit * 8 : 0,
    [isKeyboardOpen],
  );

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener(
      'keyboardWillShow',
      () => setIsKeyboardOpen(true),
    );

    keyboardHideListener.current = Keyboard.addListener(
      'keyboardWillHide',
      () => setIsKeyboardOpen(false),
    );

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    };
  }, [keyboardShowListener, keyboardHideListener]);

  return { isKeyboardOpen, keyboardPaddingBottom };
};
