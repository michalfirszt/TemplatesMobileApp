import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Button mode="contained" onPress={() => navigate('SignIn')}>
          Sign in
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
