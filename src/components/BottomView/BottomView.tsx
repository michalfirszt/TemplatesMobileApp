import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useKeyboardData } from '../../hooks';

const styles = StyleSheet.create({
  bottomView: {
    flex: 0,
    justifyContent: 'flex-end',
    width: '100%',
  },
});

type Props = {
  children: ReactNode;
  style?: object;
};

export const BottomView = ({
  children,
  style,
  ...props
}: Props): JSX.Element => {
  const insets = useSafeAreaInsets();
  const { keyboardPaddingBottom } = useKeyboardData();

  return (
    <View
      style={{
        ...styles.bottomView,
        paddingBottom: insets.bottom + keyboardPaddingBottom,
        ...style,
      }}
      {...props}>
      {children}
    </View>
  );
};
