import React, { ReactNode, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { useKeyboardData } from '../../hooks';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  hideKeyboard?: boolean;
};

export const KeyboardView = ({
  children,
  style,
  hideKeyboard = true,
}: Props): JSX.Element => {
  const { isKeyboardOpen } = useKeyboardData();

  const handleFieldPress = useCallback((): void => {
    if (hideKeyboard && isKeyboardOpen) {
      Keyboard.dismiss();
    }
  }, [hideKeyboard, isKeyboardOpen]);

  return (
    <KeyboardAvoidingView behavior="padding" style={style}>
      <TouchableWithoutFeedback onPress={handleFieldPress}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
