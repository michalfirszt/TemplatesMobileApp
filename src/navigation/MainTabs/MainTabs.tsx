import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Posts, Settings } from '../../screens';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Posts"
      component={Posts}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default MainTabs;
