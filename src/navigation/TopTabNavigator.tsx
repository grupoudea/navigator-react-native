import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    const {top} = useSafeAreaInsets();


  return (
    <Tab.Navigator
        style={{paddingTop: top}}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({ route }) => ({
          tabBarShowIcon: true,
            tabBarActiveTintColor: '#000000',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { 
                backgroundColor: 'white', 
                borderBottomWidth: 0, 
                borderBottomColor: '#fff', 
                elevation: 0
            },
            tabBarIndicatorStyle: {backgroundColor: '#2F6EC8'},
            tabBarIcon: ({ color, focused }) => {

              let iconName: string = '';
              console.log("route top tab: "+route.name);
              
                switch( route.name ) {
                  case 'CHAT':
                    iconName = 'chatbox-outline'
                  break;
      
                  case 'CONTACTS':
                    iconName = 'people-outline'
                  break;
      
                  case 'ALBUMS':
                    iconName = 'albums-outline'
                  break;
                }
      
              return <Icon name={ iconName } size={ 20 } color={ color } />
            }
          })
      }
          

    >
      <Tab.Screen name="CHAT" component={ChatScreen} />
      <Tab.Screen name="CONTACTS" component={ContactScreen} />
      <Tab.Screen name="ALBUMS" component={AlbumScreen} />
    </Tab.Navigator>
  );
}