import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabs from '../MainTabs';
import { screenNames } from '../screenNames';
import {
  CalendarAgenda,
  CalendarListPreview,
  UserProfile,
} from '../../screens';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="MainTabs" component={MainTabs} />
    <Drawer.Screen name={screenNames.Profile} component={UserProfile} />
    <Drawer.Screen
      name={screenNames.CalendarAgenda}
      component={CalendarAgenda}
    />
    <Drawer.Screen
      name={screenNames.CalendarListPreview}
      component={CalendarListPreview}
    />
  </Drawer.Navigator>
);

export default MainDrawer;
