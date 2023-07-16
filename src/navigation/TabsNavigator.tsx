import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';
import { styles } from '../theme/AppTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';


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
              // iconName = 'bandage-outline'
              iconName = 't1'
            break;

            case 'Tab2Screen':
              // iconName = 'basketball-outline'bandage-outline'
              iconName = 't2'
            break;

            case 'StackNavigator':
              // iconName = 'bookmarks-outline'
              iconName = 'sn'
            break;
          }

        /*return <Icon name={ iconName } size={ 20 } color={ color } />*/
        return <Text style={{color: color}}>{iconName}</Text>
      }
    })}
    
    >
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{ tabBarLabel: 'Stack' }} component={StackNavigator} />
    </Tab.Navigator>
  );
}