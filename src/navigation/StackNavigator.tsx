import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import PersonScreen from '../screens/PersonScreen';
import { DrawerNavigator } from './DrawerNavigator';
import { CustomDrawerNavigator } from './CustomDrawerNavigator';

export type RootStackParams = {
  Root: undefined,
  Screen1: undefined,
  Screen2: undefined,
  Screen3: undefined,
  PersonScreen: {id: number, nombre: string},

}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = ()=> {
  return (
    <Stack.Navigator
        //initialRouteName='Screen2'
        screenOptions={{
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            },
            cardStyle:{
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;