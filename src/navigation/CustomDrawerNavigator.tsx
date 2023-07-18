import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import Screen1 from '../screens/Screen1';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/AppTheme';
import { TabsNavigator } from './TabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {

    const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator  
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <DrawerContent {...props} /> }
      >
      <Drawer.Screen name="Tabs" component={TabsNavigator}  options={{headerShown:false}}/>
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <Image source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
        }} 
        style={styles.avatar}
        />
        
      </View>

      {/*Opciones menu */}
      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.menuButton}
        onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name="navigate-circle-outline" size={23} color={'black'}/>
          <Text style={styles.menuText}> Navegación</Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.menuButton}
        onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name="settings-outline" size={23} color={'black'}/>
          <Text style={styles.menuText}> Ajustes</Text>

        </TouchableOpacity>

      </View>
      
    </DrawerContentScrollView>
  )
}