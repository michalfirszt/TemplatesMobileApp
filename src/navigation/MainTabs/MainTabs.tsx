import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Map, Posts, Settings } from '../../screens';
import { screenNames } from '../screenNames';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={screenNames.Posts}
      component={Posts}
      options={{
        headerShown: false,
      }}
    />
    <Tab.Screen
      name={screenNames.Map}
      component={Map}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name={screenNames.Settings}
      component={Settings}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default MainTabs;
