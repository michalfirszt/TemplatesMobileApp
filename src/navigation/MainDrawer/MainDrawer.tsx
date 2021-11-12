import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { UserProfile } from '../../screens';
import MainTabs from '../MainTabs';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Main" component={MainTabs} />
    <Drawer.Screen name="Profile" component={UserProfile} />
  </Drawer.Navigator>
);

export default MainDrawer;
