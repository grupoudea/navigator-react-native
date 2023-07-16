import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import Screen1 from '../screens/Screen1';
import { useWindowDimensions } from 'react-native';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator  screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="Tabs" component={TabsNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}