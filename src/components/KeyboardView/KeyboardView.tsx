import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  hideKeyboard?: boolean;
};

export const KeyboardView = ({
  children,
  style,
  hideKeyboard = true,
}: Props): JSX.Element => (
  <KeyboardAvoidingView behavior="padding" style={style}>
    <TouchableWithoutFeedback
      onPress={hideKeyboard ? Keyboard.dismiss : () => {}}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
