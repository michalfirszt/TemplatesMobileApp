import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { BottomView, KeyboardView } from '../../components';
import { screenNames } from '../../navigation/screenNames';
import { lightTheme } from '../../theme';

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: lightTheme.colors.white,
  },
  content: {
    flex: 1,
  },
  keyboardView: {
    height: '100%',
  },
});

const UserProfile = (): JSX.Element => {
  const { navigate } = useNavigation();

  return (
    <KeyboardView style={styles.keyboardView}>
      <View style={styles.content}>
        <View style={styles.content}>
          <Button mode="contained" onPress={() => navigate(screenNames.SignIn)}>
            Sign in
          </Button>
        </View>
        <BottomView style={styles.bottom}>
          <TextInput mode="outlined" label="Message" multiline />
        </BottomView>
      </View>
    </KeyboardView>
  );
};

export default UserProfile;
