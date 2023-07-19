import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/AppTheme';

export const SettingsScreen = () => {

  const {authState} = useContext(AuthContext);


  return (
    <View style={{backgroundColor: 'white'}}>
        <Text style={{color: 'black'}}>Settigns</Text>
        <Text>{JSON.stringify(authState, null, 4)}</Text>
        {
          authState.favoriteIcon && (
            <Icon name={authState.favoriteIcon} size={150} color={colores.primary} />
          )
        }
        
    </View>
  )
}

