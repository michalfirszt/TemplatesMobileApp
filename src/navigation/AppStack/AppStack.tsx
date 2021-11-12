import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainDrawer from '../MainDrawer';
import { PostPreview } from '../../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator initialRouteName="MainDrawer">
    <Stack.Screen
      name="MainDrawer"
      component={MainDrawer}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="PostPreview" component={PostPreview} />
  </Stack.Navigator>
);

export default AppStack;
