import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';
import { styles } from '../theme/AppTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createMaterialBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator 
    sceneAnimationEnabled={true}
    activeColor="black"
    inactiveColor="grey"
    barStyle={{ backgroundColor: 'white'}}
    screenOptions={ ({ route }) => ({
      tabBarIcon: ({ color, focused }) => {

        let iconName: string = '';
          switch( route.name ) {
            case 'Tab1Screen':
              iconName = 'bandage-outline'
            break;

            case 'Tab2Screen':
              iconName = 'basketball-outline'
            break;

            case 'StackNavigator':
              iconName = 'bookmarks-outline'
            break;
          }

        return <Icon name={ iconName } size={ 20 } color={ color } />
      }
    })}
    
    >
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <Tab.Screen name="StackNavigator" options={{ tabBarLabel: 'Stack' }} component={StackNavigator} />
    </Tab.Navigator>
  );
}