import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isString, isNull } from 'lodash';
import { ActivityIndicator } from 'react-native-paper';

import MainDrawer from '../MainDrawer';
import { screenNames } from '../screenNames';
import { CreatePost, EditPost, PostPreview, SignIn } from '../../screens';
import { storageTools } from '../../utilities';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [isSignedIn, setIsSignedIn] = useState<null | boolean>(null);

  useEffect(() => {
    const username = storageTools.getData('@username');
    username.then((response) => {
      setIsSignedIn(isString(response));
    });
  }, []);

  if (isNull(isSignedIn)) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={isSignedIn ? 'MainDrawer' : screenNames.SignIn}>
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="MainDrawer"
            component={MainDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={screenNames.PostPreview}
            component={PostPreview}
          />
          <Stack.Screen name={screenNames.CreatePost} component={CreatePost} />
          <Stack.Screen name={screenNames.EditPost} component={EditPost} />
        </>
      ) : (
        <>
          <Stack.Screen name={screenNames.SignIn} component={SignIn} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default AppStack;
