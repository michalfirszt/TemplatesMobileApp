import React, { ReactNode, useMemo } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useKeyboardData } from '../../hooks';
import { lightTheme } from '../../theme';

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
  const { isKeyboardOpen } = useKeyboardData();

  const viewStyles = useMemo((): object => {
    if (!isKeyboardOpen) {
      return {};
    }

    switch (Platform.OS) {
      case 'ios': {
        return { paddingBottom: insets.bottom + lightTheme.spaceUnit * 8 };
      }
      case 'android': {
        return { bottom: lightTheme.spaceUnit * -29 };
      }
      default: {
        return {};
      }
    }
  }, [insets, isKeyboardOpen]);

  return (
    <View
      style={{
        ...styles.bottomView,
        ...viewStyles,
        ...style,
      }}
      {...props}>
      {children}
    </View>
  );
};
