import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SignInForm from '../../components/SignInForm';

import { lightTheme } from '../../theme';

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: lightTheme.spaceUnit,
  },
});

const SignIn = () => {
  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <SignInForm />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
