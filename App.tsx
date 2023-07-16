import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { CustomDrawerNavigator } from './src/navigation/CustomDrawerNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <CustomDrawerNavigator />
    </NavigationContainer>
  )
}

export default App