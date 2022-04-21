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
  container: {
    height: '100%',
  },
  content: {
    flex: 1,
  },
});

const UserProfile = (): JSX.Element => {
  const { navigate } = useNavigation();

  return (
    <KeyboardView style={styles.container}>
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
