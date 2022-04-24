import { useState, useRef, useEffect } from 'react';
import { Keyboard } from 'react-native';

type KeyboardData = {
  isKeyboardOpen: boolean;
};

export const useKeyboardData = (): KeyboardData => {
  const keyboardShowListener = useRef<any>(null);
  const keyboardHideListener = useRef<any>(null);

  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardOpen(true),
    );

    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardOpen(false),
    );

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    };
  }, [keyboardShowListener, keyboardHideListener]);

  return { isKeyboardOpen };
};
