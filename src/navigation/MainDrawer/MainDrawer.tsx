import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabs from '../MainTabs';
import { screenNames } from '../screenNames';
import { UserProfile } from '../../screens';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="MainTabs" component={MainTabs} />
    <Drawer.Screen name={screenNames.Profile} component={UserProfile} />
  </Drawer.Navigator>
);

export default MainDrawer;
