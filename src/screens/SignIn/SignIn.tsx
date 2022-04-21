import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SignInForm from '../../components/SignInForm';

import { lightTheme } from '../../theme';
import { storageTools } from '../../utilities';

type FormData = {
  username: string;
};

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: lightTheme.spaceUnit,
  },
});

const SignIn = () => {
  const handleOnSubmit = useCallback(({ username }: FormData) => {
    storageTools.storeData('@username', username);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <SignInForm onSubmit={handleOnSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
